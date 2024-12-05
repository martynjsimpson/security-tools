document.getElementById('cvssForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent the form from submitting and refreshing the page
    const input = document.getElementById('cvssInput').value.trim();
    decodeCvssVector(input);
});

function decodeCvssVector(vectorInput) {
    const errorElement = document.getElementById('error');
    const resultElement = document.getElementById('result');

    // Clear previous messages
    if (errorElement) {
        errorElement.textContent = '';
    }
    if (resultElement) {
        resultElement.innerHTML = '';
    }

    // Validate the input format for CVSS 3.1 or 4.0 (simplified regex)
    const validFormat = /^CVSS:(3\.1|4\.0)/i;
    
    // First check for basic format validation, if not valid return
    if (!validFormat.test(vectorInput)) {
        if (errorElement) {
            errorElement.textContent = 'Invalid CVSS vector format. Please use CVSS:3.1 or CVSS:4.0 format.';
        }
        return;  // Don't proceed further if invalid
    }

    // Extract the CVSS version and strip out the "CVSS:3.1" or "CVSS:4.0" prefix
    const cvssVersion = vectorInput.match(/^CVSS:(\d+\.\d+)/i)[1];
    const vector = vectorInput.replace(/^CVSS:\d+\.\d+\//, '').split('/');

    const values = {
        AV: 'Attack Vector',
        AC: 'Attack Complexity',
        PR: 'Privileges Required',
        UI: 'User Interaction',
        S: 'Scope',
        C: 'Confidentiality',
        I: 'Integrity',
        A: 'Availability',
        AT: 'Attack Target',
        VC: 'Vulnerability Complexity',
        VI: 'Vulnerability Impact',
        VA: 'Vulnerability Availability',
        SC: 'Scope Impact',
        SI: 'Security Impact',
        SA: 'Severity'
    };

    const possibleValues = {
        AV: { N: 'Network', A: 'Adjacent Network', L: 'Local', P: 'Physical' },
        AC: { H: 'High', L: 'Low' },
        PR: { N: 'None', L: 'Low', H: 'High' },
        UI: { N: 'None', R: 'Required' },
        S: { U: 'Unchanged', C: 'Changed' },
        C: { N: 'None', L: 'Low', H: 'High' },
        I: { N: 'None', L: 'Low', H: 'High' },
        A: { N: 'None', L: 'Low', H: 'High' },
        AT: { N: 'None', T: 'Targeted' },
        VC: { N: 'None', L: 'Low', H: 'High' },
        VI: { N: 'None', L: 'Low', H: 'High' },
        VA: { N: 'None', L: 'Low', H: 'High' },
        SC: { N: 'None', C: 'Critical', L: 'Low' },
        SI: { N: 'None', L: 'Low', H: 'High' },
        SA: { N: 'None', L: 'Low', H: 'High' }
    };

    let decodedValues = {};

    // Function to return color based on value for each metric
    function getColor(metric, value) {
        const colorMap = {
            'Attack Vector': { Physical: 'green', Local: 'yellow', Adjacent: 'orange', Network: 'red' },
            'Attack Complexity': { Low: 'green', High: 'red' },
            'Privileges Required': { None: 'green', Low: 'yellow', High: 'red' },
            'User Interaction': { None: 'green', Required: 'red' },
            'Scope': { Unchanged: 'green', Changed: 'red' },
            'Confidentiality': { None: 'green', Low: 'yellow', High: 'red' },
            'Integrity': { None: 'green', Low: 'yellow', High: 'red' },
            'Availability': { None: 'green', Low: 'yellow', High: 'red' },
            'Attack Target': { None: 'green', Targeted: 'red' },
            'Vulnerability Complexity': { None: 'green', Low: 'yellow', High: 'red' },
            'Vulnerability Impact': { None: 'green', Low: 'yellow', High: 'red' },
            'Vulnerability Availability': { None: 'green', Low: 'yellow', High: 'red' },
            'Scope Impact': { None: 'green', Critical: 'red', Low: 'yellow' },
            'Security Impact': { None: 'green', Low: 'yellow', High: 'red' },
            'Severity': { None: 'green', Low: 'yellow', High: 'red' }
        };        

        // Check if the value exists in the color map, otherwise default to 'black'
        return colorMap[metric] && colorMap[metric][value] ? colorMap[metric][value] : 'black';
    }

    // Parse each vector metric and decode the corresponding value
    vector.forEach(item => {
        const [metric, value] = item.split(':');
        if (values[metric] && possibleValues[metric]) {
            decodedValues[values[metric]] = possibleValues[metric][value] || 'Unknown';
        }
    });

    // Display the decoded result on the page
    if (resultElement) {
        resultElement.innerHTML = `
            <p><strong>Decoded CVSS Vector:</strong></p>
            <table>
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>CVSS Version</strong></td>
                        <td>${cvssVersion}</td>
                    </tr>
                    ${Object.keys(decodedValues).map(key => {
                        const value = decodedValues[key];
                        const color = getColor(key, value);  // Get the color based on value
                        return `
                            <tr>
                                <td>${key}</td>
                                <td style="color: ${color}">${value}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
    }
}
