
# Team image
cwebp -q 80 team-of-skydivers-working.png -o team-air-coach-paracadutismo.webp

# Smartphone images
cwebp -q 82 smartphone-air-coach.jpg -o app-air-coach-smartphone-interfaccia.webp
cwebp -q 82 smartphone-air-coach2.jpg -o app-air-coach-smartphone-demo.webp

# Hero image
cwebp -q 85 parachutist-in-flight-with-open-blue-sky-and-cloud2.jpg -o paracadutista-volo-cielo-aperto-hero.webp

# Logo
cwebp -q 90 air-coach-logo-full.jpg -o logo-air-coach-full.webp

echo "✅ Conversion complete! Check file sizes:"
ls -lh *.webp