import os
from PIL import Image

# Constants
IMAGE_HEIGHT = 256
IMAGE_FORMAT = 'png'
OUTPUT_FILE = 'merged.png'
INPUT_DIR = 'blogs/imgs'
# Storage
resized = []
widths = []
# Get all files in the directory if ending with .png
files = [f for f in os.listdir(INPUT_DIR) if f.endswith('.' + IMAGE_FORMAT)]
# Resize all images to 256 height while keeping aspect ratio
for image in files:
    img = Image.open(os.path.join(INPUT_DIR, image))
    width = int(img.size[0] * IMAGE_HEIGHT / img.size[1])
    img = img.resize((width, IMAGE_HEIGHT), Image.ANTIALIAS)
    # Add to storage
    resized.append(img)
    # width of each image
    widths.append((width, image[:3]))
# Stitch all images together
total_width = sum(width for width, _ in widths)
merged = Image.new('RGB', (total_width, IMAGE_HEIGHT))
x_offset = 0
for img in resized:
    merged.paste(img, (x_offset, 0))
    x_offset += img.size[0]
# Save the merged image
merged.save(OUTPUT_FILE)
# Print the width of each image
print('Width of each image:')
for width, name in widths:
    print(name, width)