document.getElementById('cveForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the CVE number entered by the user
    let cveNumber = document.getElementById('cveNumber').value.trim();

    // Validate and ensure the CVE number has "CVE-" at the start
    if (!/^(CVE-?\d{4}-\d{4,7})$/.test(cveNumber)) {
        document.querySelector('.error').textContent = 'Please enter a valid CVE number (e.g., CVE-2024-38829).';
        return;
    }

    // If the CVE number does not start with "CVE-", add it
    if (!cveNumber.startsWith('CVE-')) {
        cveNumber = 'CVE-' + cveNumber;
    }

    // Clear any previous error message
    document.querySelector('.error').textContent = '';

    // Define URLs for providers (NVD, RedHat, etc.)
    const providers = [
        {
            name: 'NVD',
            url: `https://nvd.nist.gov/vuln/detail/${cveNumber}`,
            logo: 'images/logos/nvd.png'
        },
        {
            name: 'RedHat',
            url: `https://access.redhat.com/security/cve/${cveNumber}`,
            logo: 'images/logos/redhat.png'
        },
        {
            name: 'SecurityFocus',
            url: `https://www.securityfocus.com/bid/${cveNumber}`,
            logo: 'images/logos/securityfocus.png'
        },
        {
            name: 'MITRE',
            url: `https://cve.mitre.org/cgi-bin/cvename.cgi?name=${cveNumber}`,
            logo: 'images/logos/mitre.png'
        },
        {
            name: 'OSVDB',
            url: `https://osvdb.org/CVE-${cveNumber.replace('CVE-', '')}`,
            logo: 'images/logos/osvdb.png'
        }
    ];

    // Display provider results
    let resultHTML = '';
    providers.forEach(provider => {
        resultHTML += `
            <table>
                <thead>
                    <tr>
                        <th>Provider</th>
                        <th>URL</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="${provider.logo}" alt="${provider.name} logo"> ${provider.name}</td>
                        <td><a href="${provider.url}" target="_blank">${provider.url}</a></td>
                        <td>
                            <button onclick="copyToClipboard('${provider.url}')">Copy</button>
                            <button onclick="window.open('${provider.url}', '_blank')">Open</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        `;
    });

    // Insert the resultHTML into the results div
    document.querySelector('.result').innerHTML = resultHTML;
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert("Copied to clipboard!");
    }, function(err) {
        console.error("Could not copy text: ", err);
    });
}
