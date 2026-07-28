# KAMIYTECH GLOBAL SYSTEM RULES & ENVIRONMENT SOP
> **COMMERCIAL CORE DOCUMENT RULE-01**

> **DOCUMENT METADATA**
> - **Purpose:** Permanent record of global system execution mandates, environment CLI rules, and operational constraints for all agents, developers, and tools.
> - **Owner:** CTO & Chief Information Officer (CIO)
> - **Version:** 1.0.0
> - **Status:** APPROVED / MANDATORY / LIVE
> - **Dependencies:** `RULES.md`, `COMPANY_PROFILE.md`

---

## 1. CLI COMMAND EXECUTION RULES

> [!CAUTION]
> **MANDATORY WINDOWS PYTHON LAUNCHER RULE:**
> All Python operations MUST use `py` instead of `python`. Running `python` directly is strictly prohibited to prevent Windows Store alias conflicts.

### Command Execution Matrix
| Operation Type | MANDATORY Command Format | PROHIBITED Command Format |
| :--- | :--- | :--- |
| **Python Script Execution** | `py script.py` | `python script.py` |
| **Python Inline Execution** | `py -c "import sys; print(sys.version)"` | `python -c "..."` |
| **Python Module Execution** | `py -m pip install <package>` | `python -m pip ...` |
| **Node.js Execution** | `node script.js` | — |
| **NPM / NPX Tools** | `npx -y create-next-app@latest` | — |

---

## 2. CORPORATE CONSTANTS

- **Company Name:** KamiyTech (KamiyTech AI)
- **Primary Contact Number:** `+91 9977858817` (Ankit Vaja, Co-Founder & Business Manager)
- **Registered Office:** `1/32, behind SICA School Road, Vijay Nagar, Scheme No 54, Indore, MP 452010, India`
- **Official Currency:** Indian Rupee (INR ₹) + 18% GST

---
*End of Global System Rules. Maintained by CTO & CIO.*
