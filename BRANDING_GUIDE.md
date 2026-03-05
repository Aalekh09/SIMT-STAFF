# 🎨 SAHA Institute - Branding Guide

## Staff Performance Management System

---

## 🏢 Institute Identity

### Official Name
**SAHA INSTITUTE OF MANAGEMENT & TECHNOLOGY**

### Abbreviation
**SIMT**

### Tagline
*Excellence in Performance Management*

---

## 🎨 Color Palette

### Primary Colors

#### Institute Blue
- **Primary:** `#2563eb`
- **Dark:** `#1d4ed8`
- **Darker:** `#1e40af`
- **Usage:** Headers, buttons, primary actions
- **Gradient:** `linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)`

#### Background Purple
- **Light:** `#667eea`
- **Dark:** `#764ba2`
- **Usage:** Login page background, accents
- **Gradient:** `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

### Secondary Colors

#### Success Green
- **Color:** `#10b981`
- **Dark:** `#059669`
- **Usage:** Success messages, excellent performance
- **Gradient:** `linear-gradient(135deg, #10b981 0%, #059669 100%)`

#### Warning Yellow
- **Color:** `#f59e0b`
- **Light:** `#fbbf24`
- **Usage:** Warnings, needs improvement
- **Gradient:** `linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)`

#### Error Red
- **Color:** `#ef4444`
- **Dark:** `#dc2626`
- **Usage:** Errors, logout button
- **Gradient:** `linear-gradient(135deg, #ef4444 0%, #dc2626 100%)`

### Neutral Colors

#### Dark Slate
- **Primary:** `#1e293b`
- **Light:** `#334155`
- **Usage:** Headers, dark backgrounds

#### Gray Scale
- **Dark:** `#374151`
- **Medium:** `#6b7280`
- **Light:** `#9ca3af`
- **Very Light:** `#e5e7eb`
- **Background:** `#f9fafb`

---

## 🔤 Typography

### Font Family
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

### Font Sizes

#### Headers
- **H1 (Institute Name):** 20px, Bold (700)
- **H2 (Page Titles):** 20px, Bold (600)
- **H3 (Section Titles):** 18px, Bold (600)

#### Body Text
- **Regular:** 14px, Normal (400)
- **Small:** 12px, Normal (400)
- **Button:** 14px, Semi-Bold (600)

#### Special
- **Logo Text:** 24px, Bold (700)
- **Stat Values:** 32px, Bold (700)
- **Best Performer Name:** 32px, Bold (700)

### Letter Spacing
- **Institute Name:** 0.5px - 1px
- **Headers:** 0.5px
- **Body:** Normal

---

## 🎯 Logo Design

### SIMT Logo

#### Circular Badge
```
┌─────────────┐
│   ┌─────┐   │
│   │     │   │
│   │SIMT │   │
│   │     │   │
│   └─────┘   │
└─────────────┘
```

#### Specifications
- **Shape:** Circle
- **Size:** 80px × 80px (login), 50px × 50px (header)
- **Background:** Blue gradient
- **Text:** White, bold, centered
- **Shadow:** `0 8px 16px rgba(37, 99, 235, 0.4)`

#### CSS Implementation
```css
.logo-circle {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
  box-shadow: 0 8px 16px rgba(37, 99, 235, 0.4);
}
```

---

## 📐 Layout Guidelines

### Spacing System
- **Extra Small:** 5px
- **Small:** 10px
- **Medium:** 15px
- **Large:** 20px
- **Extra Large:** 30px
- **Section Gap:** 25px

### Border Radius
- **Small:** 6px
- **Medium:** 8px
- **Large:** 12px
- **Extra Large:** 16px
- **Circle:** 50%

### Shadows
- **Small:** `0 4px 6px rgba(0, 0, 0, 0.1)`
- **Medium:** `0 8px 24px rgba(0, 0, 0, 0.12)`
- **Large:** `0 20px 60px rgba(0, 0, 0, 0.3)`
- **Button:** `0 4px 6px rgba(37, 99, 235, 0.3)`

---

## 🎨 Component Styles

### Cards
```css
background: white;
padding: 30px;
border-radius: 12px;
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
transition: transform 0.2s, box-shadow 0.2s;
```

### Buttons
```css
background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
color: white;
padding: 12px 20px;
border-radius: 8px;
font-size: 14px;
font-weight: 600;
box-shadow: 0 4px 6px rgba(37, 99, 235, 0.3);
```

### Inputs
```css
border: 2px solid #e5e7eb;
border-radius: 8px;
padding: 12px;
font-size: 14px;
transition: border-color 0.3s;
```

### Tables
```css
border-collapse: collapse;
border-radius: 8px;
overflow: hidden;
```

---

## 🏆 Ranking Colors

### Gold (1st Place)
```css
background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
color: #78350f;
```

### Silver (2nd Place)
```css
background: linear-gradient(135deg, #d1d5db 0%, #9ca3af 100%);
color: #1f2937;
```

### Bronze (3rd Place)
```css
background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
color: #7c2d12;
```

---

## 📱 Responsive Breakpoints

### Mobile
- **Max Width:** 768px
- **Adjustments:** Single column, smaller fonts, compact spacing

### Tablet
- **Min Width:** 769px
- **Max Width:** 1024px
- **Adjustments:** Two columns, medium fonts

### Desktop
- **Min Width:** 1025px
- **Adjustments:** Full layout, optimal spacing

---

## 🎭 Animation Guidelines

### Transitions
- **Duration:** 0.2s - 0.3s
- **Easing:** ease, ease-in-out
- **Properties:** transform, box-shadow, background, border-color

### Hover Effects
- **Cards:** `translateY(-2px)` + enhanced shadow
- **Buttons:** `translateY(-2px)` + enhanced shadow
- **Links:** Color change

### Loading States
```css
@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

## 📋 Usage Examples

### Header Implementation
```html
<div class="header">
  <div class="header-title">
    <div class="header-logo">SIMT</div>
    <div>
      <div class="header-institute">SAHA INSTITUTE</div>
      <div class="header-subtitle">Staff Performance Management</div>
    </div>
  </div>
</div>
```

### Login Page
```html
<div class="institute-logo">
  <div class="logo-circle">SIMT</div>
</div>
<h1 class="institute-name">
  SAHA INSTITUTE OF<br>MANAGEMENT & TECHNOLOGY
</h1>
```

### Footer
```html
<div class="footer">
  <p>© 2026 SAHA Institute of Management & Technology. All rights reserved.</p>
</div>
```

---

## ✅ Brand Checklist

### Every Page Must Have:
- [ ] SIMT logo or branding
- [ ] Institute name (full or abbreviated)
- [ ] Consistent color scheme
- [ ] Professional typography
- [ ] Footer with copyright

### Design Principles:
- [ ] Clean and professional
- [ ] Consistent spacing
- [ ] Readable typography
- [ ] Accessible colors
- [ ] Responsive layout

---

## 🚫 Don'ts

### Never:
- ❌ Use colors outside the palette
- ❌ Mix different font families
- ❌ Stretch or distort the logo
- ❌ Use low contrast text
- ❌ Ignore mobile responsiveness
- ❌ Remove institute branding
- ❌ Use inconsistent spacing

---

## 📞 Brand Guidelines Contact

For questions about branding:
- Review this guide
- Maintain consistency
- Follow color palette
- Use approved fonts
- Keep professional appearance

---

## 🎓 Institute Values Reflected in Design

### Professionalism
- Clean, modern interface
- Consistent branding
- Professional color scheme

### Excellence
- High-quality design
- Attention to detail
- Polished appearance

### Transparency
- Clear information display
- Easy-to-read metrics
- Honest feedback

### Innovation
- Modern technology
- User-friendly interface
- Continuous improvement

---

**Maintain Brand Consistency Across All Touchpoints**

© 2026 SAHA Institute of Management & Technology
