# CVSS Decoder

The CVSS Decoder is a tool that allows users to input a CVSS vector string and decode it into its constituent metrics. The application visualizes the CVSS base score, the attack vector, attack complexity, and other metrics to assess the severity of vulnerabilities.

## Features

- **Vector Decoding**: Input a CVSS vector string (e.g., `AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H`) and see the corresponding decoded metrics.
- **Severity Color Coding**: Based on the decoded metrics, the tool applies color coding to make it easier to assess the security risk.
- **Interactive Interface**: Input, decode, and evaluate CVSS vectors interactively.

## Usage

1. Open the `cvss-decoder/index.html` file in your web browser.
2. Enter a CVSS vector in the input field.
3. Click the "Decode" button to see the decoded metrics and the corresponding CVSS score.

### CVSS Metrics Interpreted

- **Attack Vector (AV)**: The method by which the vulnerability is exploited (e.g., Network, Adjacent, Local, Physical).
- **Attack Complexity (AC)**: How complex the attack is (e.g., Low, High).
- **Privileges Required (PR)**: The level of privileges required to exploit the vulnerability.
- **User Interaction (UI)**: Whether user interaction is needed to exploit the vulnerability.
- **Scope (S)**: The extent to which the exploitation of the vulnerability impacts the system.

## License

This tool is licensed under the GNU General Public License v3.0. See the [LICENSE](../LICENSE) file for details.

## Contact

For support or to contribute, reach out to [Martyn Simpson](https://github.com/martynjsimpson).
