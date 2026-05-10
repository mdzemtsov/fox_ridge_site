from rembg import remove
from PIL import Image
import io

input_path = '/home/ubuntu/fox_ridge_site/client/public/images/slava.webp'
output_path = '/home/ubuntu/fox_ridge_site/client/public/images/slava_nobg.png'

print("Loading image...")
with open(input_path, 'rb') as f:
    input_data = f.read()

print("Removing background...")
output_data = remove(input_data)

print("Saving result...")
img = Image.open(io.BytesIO(output_data)).convert('RGBA')
img.save(output_path, 'PNG')
print(f"Saved to: {output_path}")
print(f"Size: {img.size}")
