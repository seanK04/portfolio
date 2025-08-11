# AWS Intern Experience Images

This folder contains images related to the AWS Software Development Intern experience.

## Usage

To use these images in the `aws-intern.tsx` component, import the ContentImage component and reference the images like this:

```tsx
import ContentImage from '../../components/ContentImage';

// In your component:
<ContentImage 
  src="/images/experiences/aws-intern/your-image-name.png" 
  alt="Description of the image"
/>
```

## Image Naming Convention

Please follow this naming convention when adding images:
- Use descriptive names (e.g., `aws-dashboard.png`, `aws-architecture-diagram.png`)
- Use lowercase with hyphens for separators
- Include a number suffix if there are multiple related images (e.g., `aws-project-1.png`, `aws-project-2.png`)

## Supported Formats

- PNG (.png) - Recommended for screenshots and diagrams
- JPEG (.jpg, .jpeg) - Good for photos
- WebP (.webp) - Modern format with better compression
