# CVE Tool

## Overview

The **CVE Tool** is a simple web-based tool designed to help users quickly generate URLs for CVE (Common Vulnerabilities and Exposures) details across various providers. By entering a CVE number (e.g., `CVE-2024-38829`), users can instantly get direct links to detailed information on multiple security databases such as the National Vulnerability Database (NVD), Red Hat, MITRE, VulDB, Exploit-DB, Snyk, and Qualys.

The tool also automatically adjusts the CVE number format if necessary (e.g., adding "CVE-" to an input like `2024-38829`), making it user-friendly for different CVE number formats.

## Features

- **CVE URL Generation**: Based on the input, the app generates and displays URLs for various CVE providers.
- **Support for Multiple Providers**: The tool supports a list of security providers including:
  - NVD (National Vulnerability Database)
  - Red Hat
  - MITRE
  - VulDB
  - Exploit-DB
  - Snyk
  - Qualys
- **Copy & Open Actions**: Each URL comes with action buttons to either:
  - **Copy** the URL to the clipboard.
  - **Open** the URL in a new window.
- **Responsive Design**: The app is designed to work well across different screen sizes, providing a clean user interface.
- **Dark Mode Theme**: The tool comes with a dark mode theme for better readability in low-light environments.

## Usage

### How to Use:

1. **Enter a CVE Number**: Type a valid CVE number (e.g., `CVE-2024-38829` or `2024-38829`) in the input field.
2. **Generate URLs**: Click the "Get CVE URLs" button.
3. **View Results**: The tool will display a table with provider logos, the corresponding URLs for the CVE, and action buttons (Copy, Open).

### Example:

- **Input**: `CVE-2024-38829`
- **Output**: The tool generates URLs for providers like NVD, Red Hat, MITRE, and others, allowing you to quickly access the details for that CVE.

## Installation

### Requirements:

- A modern web browser (e.g., Chrome, Firefox, Edge).
- No server-side setup is required, as this is a client-side application.

### Steps:

1. Clone or download the repository to your local machine.
2. Ensure that the **logos** for each provider are placed in the `images/logos/` directory as `.png` files.
3. Open the `index.html` file in your web browser to start using the tool.

## Current Providers & URLs

When you enter a CVE number, the following providers will generate URLs with detailed CVE information:

- **NVD (National Vulnerability Database)**:
  - URL: `https://nvd.nist.gov/vuln/detail/CVE-2024-38829`
- **Red Hat**:
  - URL: `https://access.redhat.com/security/cve/CVE-2024-38829`
- **MITRE**:
  - URL: `https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-38829`
- **VulDB**:
  - URL: `https://vuldb.com/?id=CVE-2024-38829`
- **Exploit-DB**:
  - URL: `https://www.exploit-db.com/exploits/CVE-2024-38829`
- **Snyk**:
  - URL: `https://snyk.io/vuln/CVE-2024-38829`
- **Qualys**:
  - URL: `https://www.qualys.com/`

## Adding New Providers

The CVE Tool is designed to be easily extendable to support new CVE providers. To add a new provider, follow these steps:

### 1. Add the Provider's Logo

- Place the provider's logo as a `.png` file in the `images/logos/` directory. The file should be named based on the provider's name (e.g., `newprovider-logo.png`).

### 2. Update the `generateUrls` Function

- Open the `index.html` file and find the `generateUrls` function.
- Add an object to the `urls` array for the new provider. The object should contain:
  - `provider`: The name of the new provider (e.g., "New Provider").
  - `logo`: The path to the logo file (e.g., `'images/logos/newprovider-logo.png'`).
  - `url`: The base URL for the provider with a placeholder for the CVE number (e.g., `https://newprovider.com/cve/${formattedInput}`).

Example of adding a new provider:

```javascript
const urls = [
    // Existing providers...
    {
        provider: 'New Provider',
        logo: 'images/logos/newprovider-logo.png',
        url: `https://newprovider.com/cve/${formattedInput}`
    }
];

## Contributing

Feel free to submit pull requests or open issues for enhancements or bug fixes.

## License

This project is open-source and available under the [GPL 3.0 License](LICENSE).
```
