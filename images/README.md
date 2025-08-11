# Photo Organization Guide

This directory contains all static images for the portfolio app. Images are organized by project and experience to maintain a clean structure.

## Directory Structure

```
public/images/
├── projects/
│   ├── fivi/
│   │   ├── Fivi1.jpg
│   │   ├── Fivi2.png
│   │   └── Fivi3.jpg
│   └── transformer-rudder/
│       ├── results-1.png
│       ├── results-2.png
│       ├── architecture.png
│       └── loss-function.png
└── experiences/
    └── [experience-name]/
        └── [image-files]
```

## Image Guidelines

### File Naming Convention

- Use descriptive names that indicate content (e.g., `Fivi1.jpg`, `architecture-diagram.png`)
- Include appropriate file extensions:
  - `.jpg` for photographs
  - `.png` for screenshots, diagrams, and images with transparency
  - `.mp4` for demo videos
  - `.webp` for optimized web images

### Image Optimization

- Compress images to reduce file size while maintaining quality
- Use appropriate dimensions for your content needs
- Consider using WebP format for better compression

### Adding New Images

1. Place the image in the appropriate project/experience directory
2. Use the `ContentImage` component to display the image in your content
3. Ensure alt text is descriptive and accessible

## Usage in Components

```tsx
import ContentImage from "../components/ContentImage";

// In your component
return (
  <div>
    <p>Your content here...</p>

    <ContentImage
      src="/images/projects/fivi/Fivi1.jpg"
      alt="FiVi main interface showing AI-powered fitness coaching"
      caption="FiVi's main interface providing real-time AI coaching"
      width="full"
    />

    <p>More content...</p>

    <ContentImage
      src="/images/projects/fivi/Fivi2.png"
      alt="FiVi form correction interface"
      caption="Real-time pose detection and form correction feedback"
      width="half"
    />
  </div>
);
```

## ContentImage Component Options

- **width**: `"full"` | `"half"` | `"third"` | `"quarter"`
- **caption**: Optional descriptive text below the image
- **className**: Additional CSS classes for custom styling
