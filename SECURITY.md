Report a Security Vulnerability
- If you believe you have found a security vulnerability in this repository, please report it privately to the maintainers so we can investigate and remediate before public disclosure.
- Preferred contact: pushpak.jaiswal (at) example.com
- If you need to send sensitive files or exploit PoC, please encrypt them with our PGP key (PGP key fingerprint: <insert-fingerprint-here>) and attach them to your email. If you do not have a way to encrypt, state that in your email and we will provide an alternate secure channel.

What to include in your report
- A clear description of the issue and the component or file(s) affected.
- Steps to reproduce the problem (minimal, repeatable reproduction is extremely helpful).
- Expected vs. actual behavior.
- Proof-of-concept (PoC) code or screenshots, where appropriate.
- Version/commit SHA or branch name where you observed the problem.
- Your contact details and whether you consent to being contacted about the report or credited publicly.

How we handle reports
- Acknowledgement: We will acknowledge receipt within 3 business days.
- Triage: We will assess severity and impact, and assign a maintainer to investigate.
- Fix: We will work to identify and ship a fix or mitigation in a reasonable timeframe based on severity.
- Disclosure: We prefer coordinated disclosure. We will communicate timelines and, when practical, will work with the reporter on responsible disclosure. We will not publicly disclose a vulnerability before a fix or mitigation is available unless there is a compelling reason.
- Credit: With your permission, we will credit the reporter in release notes or acknowledgements.

Severity and response expectations (typical)
- Critical (remote code execution, total data exposure): initial triage within 48 hours; expedited fix or mitigation.
- High (authentication bypass, serious data leak): initial triage within 5 business days; prioritized fix.
- Medium/Low (information disclosure with limited impact, minor misconfigurations): initial triage within 10 business days.

Public disclosure and timelines
- We ask reporters to allow reasonable time for the maintainers to investigate and prepare a fix before public disclosure.
- If you plan to publicly disclose a vulnerability, please inform us in advance so we can coordinate and avoid user harm.

Security best practices for contributors
- Do not include secrets (API keys, passwords, private keys) in commits, PRs, or issues. If you accidentally commit a secret, rotate it immediately and notify the maintainers.
- Follow secure coding guidelines and validate inputs, escape outputs, and restrict permissions where possible.
- Use dependency scanning tools and keep dependencies up to date. If you discover a vulnerable dependency, open an issue describing the affected dependency, version range, and suggested upgrade path.

Reporting third-party or supply-chain issues
- If the issue stems from a dependency or third-party service, include the dependency name, version range affected, and any relevant upstream issue links or advisories.

Legal safe harbor
- We welcome good-faith security research. Please avoid privacy violations, destruction of data, or extortion. We will not pursue legal action against researchers acting in good faith and following the reporting guidance above.

Contact & maintainers
- Maintainer(s): PUSHPAK-JAISWAL
- Email: pushpakmjaiswal@gmail.com
- Repo: https://github.com/PUSHPAK-JAISWAL/Document_Summarizer

Acknowledgements and credits
- If you would like to be acknowledged for responsibly reporting a vulnerability, state your preferred name/handle in your report. We will honor requests for anonymity when feasible.
