# UC1 — Guided Settings

## 📊 SLIDE CONTENT (for PowerPoint/Canva)

### Slide Title
**Guided Settings: Contextual Configuration Assistance**

### Key Points (Bullet Format)
• **Quick Access** → Top settings in ≤2 clicks  
• **Visual Guidance** → Step-by-step overlays + previews  
• **Smart Actions** → One-click apply with fallback instructions  
• **Error Prevention** → Guided paths reduce configuration mistakes  

### Value Proposition
**30% faster configuration • Fewer errors • Better adoption**

### User Story (One-Liner)
*"As a builder, I want contextual paths to settings, so I can configure dashboards quickly and correctly"*

### Demo Scenario
**Theme Configuration:** Dark/Light mode switching with instant preview and one-click apply

---

## 📋 BACKGROUND INFORMATION

## Use Case Overview
**Goal:** Provide contextual guidance to dashboard builders for quick and error-free configuration  
**Problem:** Settings are hard to find, configuration takes too long, frequent mistakes  
**Solution:** Step-by-step guidance with direct action buttons and visual previews

## Business Value
- **Time Reduction:** 30% faster configuration through guided paths
- **Error Prevention:** Fewer misconfigured dashboards requiring rework
- **User Adoption:** Lower barrier to entry for new dashboard builders
- **Consistency:** Standardized configuration patterns across teams

## User Story
**As a** dashboard builder  
**I want** contextual paths to important settings  
**So that** I can configure dashboards quickly and correctly

## Acceptance Criteria
- ✅ Top 10 most common settings are guided
- ✅ Maximum 2 clicks to reach any guided setting
- ✅ Visual preview of changes before applying
- ✅ One-click apply functionality available
- ✅ Manual step-by-step instructions as fallback

## Key Features
### 1. Intelligent Context Recognition
- Detects current configuration state
- Suggests relevant next actions
- Prioritizes most impactful settings

### 2. Dual Action Approach
- **Quick Actions:** One-click buttons for common tasks
- **Guided Paths:** Step-by-step instructions for complex configurations

### 3. Visual Feedback
- Live previews of configuration changes
- Before/after comparisons
- Visual indicators of current state

### 4. Progressive Disclosure
- Basic options prominently displayed
- Advanced settings accessible but not overwhelming
- Related suggestions for workflow continuation

## Technical Implementation (High-Level)
- **UI Overlays:** Non-intrusive guidance elements
- **Context Engine:** Analyzes current dashboard state
- **Action APIs:** Direct configuration change endpoints
- **Preview System:** Real-time configuration visualization

## Success Metrics
- **Configuration Time:** Measure time-to-complete for common tasks
- **Error Rate:** Track configuration mistakes requiring fixes
- **Feature Adoption:** Monitor usage of guided vs. manual configuration
- **User Satisfaction:** Survey feedback on guidance effectiveness

## Related Use Cases
- **UC3 —** UX Advisory (automated configuration validation)
- **UC5 —** Path Builder (accessibility and usability improvements)
- **UC8 —** Object Addressing (contextual tips during usage)

## Mockup Examples
### Primary Scenarios:
1. **Theme Configuration** (Dark/Light mode switching)
2. **Chart Type Selection** (guided visualization picker)
3. **Layout Adjustment** (grid and spacing configuration)
4. **Data Source Connection** (connection wizard)
5. **Permission Settings** (role-based access configuration)

### UI Patterns:
- **Action Cards:** Quick-apply options with descriptions
- **Guided Tours:** Step-by-step overlay instructions
- **Smart Suggestions:** Context-aware next steps
- **Preview Panels:** Live configuration preview

## Constraints & Considerations
- **Non-Intrusive:** Guidance should not overwhelm the interface
- **Dismissible:** Users can close or skip guidance at any time
- **Accessible:** All guidance elements meet accessibility standards
- **Consistent:** Follows established design system patterns

## Vendor Requirements (Strategy One)
- **Settings API:** Programmatic access to configuration options
- **UI Hooks:** Integration points for guidance overlays
- **State Management:** Current configuration detection capabilities
- **Preview Engine:** Real-time configuration visualization system
