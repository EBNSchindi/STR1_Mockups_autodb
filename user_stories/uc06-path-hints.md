# UC6 — Path Hints

## 📊 SLIDE CONTENT (for PowerPoint/Canva)

### Slide Title
**Analysis Path Consumer: Guided Exploration Experience**

### Key Points (Bullet Format)
• **Smart Hints** → Contextual "Analysis Path" indicators on charts  
• **Triggered Chat** → Automatic guidance when hints are clicked  
• **Step Options** → Multiple exploration choices with previews  
• **Navigation** → Breadcrumb tracking and easy reset functionality  

### Value Proposition
**Guided discovery • Reduced analysis time • Confidence in exploration**

### User Story (One-Liner)
*"As a consumer, I want contextual exploration hints, so I can discover insights without getting lost in complex data"*

### Demo Scenario
**Following Pipeline Path:** Click hint → guided drill-down → breadcrumb navigation with reset option

---

## 📋 BACKGROUND INFORMATION

## Use Case Overview
**Goal:** Provide consumers with guided exploration experience through builder-designed analysis paths  
**Problem:** Users get overwhelmed by dashboard complexity, miss key insights, uncertain about next steps  
**Solution:** Contextual hints and guided navigation following expert-designed exploration patterns

## Business Value
- **Faster Insight Discovery:** 40% reduction in time-to-insight through guided paths
- **Increased Confidence:** Users feel supported in their data exploration
- **Better Adoption:** Lower barriers to dashboard engagement
- **Consistent Learning:** Standardized exploration patterns improve data literacy

## User Story
**As a** dashboard consumer  
**I want** contextual exploration hints  
**So that** I can discover insights without getting lost in complex data

## Acceptance Criteria
- ✅ Subtle visual hints on path-enabled charts
- ✅ Maximum 2 hints per visualization (non-intrusive)
- ✅ Clear breadcrumb navigation with reset option
- ✅ Multiple exploration options (recommended + alternatives)

## Key Features
### 1. Visual Guidance System
- **Smart Hints:** Contextual "Analysis Path" indicators
- **Click Activation:** Hints trigger guided exploration flow
- **Progress Tracking:** Visual indication of current position in path
- **Alternative Options:** Choice between guided and free exploration

### 2. Guided Navigation
- **Step-by-Step Flow:** Clear progression through analysis stages
- **Breadcrumb Trail:** Visual tracking of exploration journey
- **Reset Functionality:** Easy return to starting point
- **Multiple Paths:** Choice between different exploration routes

### 3. Interactive Chat Integration
- **Triggered Guidance:** Automatic chat activation on hint click
- **Contextual Suggestions:** Relevant next steps based on current view
- **Alternative Exploration:** Options to deviate from suggested path
- **Progress Updates:** Real-time feedback on exploration status

## Technical Implementation (High-Level)
- **Hint Rendering:** Visual indicator system on charts
- **Path State Management:** Track user position in exploration journey
- **Chat Integration:** Seamless activation of guidance system
- **Navigation Framework:** Breadcrumb and reset functionality

## Success Metrics
- **Engagement Rate:** How often consumers engage with analysis hints
- **Completion Rate:** Users who follow paths to intended depth
- **Time-to-Insight:** Measure discovery speed vs. manual exploration
- **User Satisfaction:** Feedback on guidance effectiveness

## Related Use Cases
- **UC5 —** Path Builder (the builder experience)
- **UC7 —** Chart Path Hints (visual indicators on charts)
- **UC1 —** Guided Settings (similar guidance principles)
- **UC4 —** Context Documentation (complementary documentation)

## Mockup Examples
### Consumer Scenarios:
1. **Hint Activation** (clicking analysis path indicator)
2. **Guided Drill-Down** (following recommended exploration)
3. **Breadcrumb Navigation** (tracking and resetting analysis journey)
4. **Alternative Selection** (choosing different exploration paths)

## Constraints & Considerations
- **Non-Intrusive:** Hints should be subtle and easily dismissible
- **Performance:** Path suggestions must load quickly
- **Accessibility:** All guidance elements meet accessibility standards
- **User Agency:** Preserve choice between guided and free exploration

## Vendor Requirements (Strategy One)
- **Hint Display System:** Visual indicator placement on charts
- **State Management:** Track user position in analysis journey
- **Chat Integration:** Seamless guidance activation framework
- **Navigation APIs:** Breadcrumb and reset functionality
