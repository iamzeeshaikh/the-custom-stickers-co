export interface InternalLink {
  href: string;
  anchor: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

// links[0] → About para 1 (replaces "custom sticker products")
// links[1] → Why Choose para 1 (added naturally)
// links[2] → How to Order step 2 (file prep context)
const linkMap: Record<string, [InternalLink, InternalLink, InternalLink]> = {
  'die-cut-stickers': [
    { href: '/custom-vinyl-stickers/', anchor: 'durable vinyl sticker printing' },
    { href: '/die-cut-waterproof-stickers/', anchor: 'die cut waterproof stickers' },
    { href: '/artwork-guidelines/', anchor: 'artwork setup for die cut printing' },
  ],
  'custom-vinyl-stickers': [
    { href: '/die-cut-stickers/', anchor: 'precision die cut sticker printing' },
    { href: '/waterproof-stickers/', anchor: 'fully waterproof vinyl stickers' },
    { href: '/sticker-printing-options/', anchor: 'vinyl sticker finishing and lamination' },
  ],
  'waterproof-stickers': [
    { href: '/outdoor-stickers/', anchor: 'UV-resistant outdoor sticker printing' },
    { href: '/die-cut-waterproof-stickers/', anchor: 'die cut waterproof stickers' },
    { href: '/sticker-materials/', anchor: 'waterproof vinyl material options' },
  ],
  'custom-holographic-stickers': [
    { href: '/holographic-die-cut-stickers/', anchor: 'holographic die cut sticker printing' },
    { href: '/metallic-stickers/', anchor: 'metallic gold and silver stickers' },
    { href: '/sticker-hologram/', anchor: 'security hologram sticker printing' },
  ],
  'custom-clear-stickers': [
    { href: '/die-cut-clear-stickers/', anchor: 'die cut transparent stickers' },
    { href: '/window-stickers/', anchor: 'clear window and glass stickers' },
    { href: '/packaging-labels/', anchor: 'clear product packaging labels' },
  ],
  'packaging-labels': [
    { href: '/die-cut-labels/', anchor: 'precision die cut product labels' },
    { href: '/custom-labels-and-stickers/', anchor: 'complete custom label printing' },
    { href: '/sticker-materials/', anchor: 'food-safe label material guide' },
  ],
  'promotional-stickers': [
    { href: '/custom-business-stickers/', anchor: 'custom business branding stickers' },
    { href: '/qr-code-stickers/', anchor: 'scannable QR code stickers' },
    { href: '/get-a-quote/', anchor: 'get bulk sticker pricing' },
  ],
  'qr-code-stickers': [
    { href: '/promotional-stickers/', anchor: 'custom promotional marketing stickers' },
    { href: '/packaging-labels/', anchor: 'product packaging label printing' },
    { href: '/artwork-guidelines/', anchor: 'QR code sticker artwork requirements' },
  ],
  'custom-sticker-printing': [
    { href: '/die-cut-stickers/', anchor: 'precision die cut sticker printing' },
    { href: '/sticker-printing-options/', anchor: 'sticker finish and coating options' },
    { href: '/sticker-materials/', anchor: 'premium sticker material selection' },
  ],
  'bumper-stickers': [
    { href: '/car-stickers/', anchor: 'custom car stickers and decals' },
    { href: '/outdoor-stickers/', anchor: 'weatherproof outdoor sticker printing' },
    { href: '/waterproof-stickers/', anchor: 'heavy-duty waterproof vinyl stickers' },
  ],
  'car-stickers': [
    { href: '/bumper-stickers/', anchor: 'custom bumper sticker printing' },
    { href: '/die-cut-decals/', anchor: 'precision die cut vehicle decals' },
    { href: '/outdoor-stickers/', anchor: 'UV-resistant outdoor vehicle stickers' },
  ],
  'glossy-stickers': [
    { href: '/matte-stickers/', anchor: 'premium matte finish sticker printing' },
    { href: '/custom-vinyl-stickers/', anchor: 'durable vinyl sticker printing' },
    { href: '/sticker-printing-options/', anchor: 'gloss and finish coating options' },
  ],
  'matte-stickers': [
    { href: '/glossy-stickers/', anchor: 'high-gloss laminated sticker printing' },
    { href: '/packaging-labels/', anchor: 'premium matte packaging label printing' },
    { href: '/sticker-printing-options/', anchor: 'matte and soft-touch finish options' },
  ],
  'metallic-stickers': [
    { href: '/embossed-gold-foil-stickers/', anchor: 'luxury embossed gold foil stickers' },
    { href: '/custom-holographic-stickers/', anchor: 'holographic foil sticker printing' },
    { href: '/sticker-materials/', anchor: 'metallic and foil sticker material guide' },
  ],
  'glow-in-the-dark-stickers': [
    { href: '/reflective-stickers/', anchor: 'high-visibility reflective stickers' },
    { href: '/indoor-stickers/', anchor: 'custom indoor decorative stickers' },
    { href: '/sticker-materials/', anchor: 'specialty glow material options' },
  ],
  'reflective-stickers': [
    { href: '/glow-in-the-dark-stickers/', anchor: 'glow-in-the-dark safety stickers' },
    { href: '/outdoor-stickers/', anchor: 'heavy-duty outdoor vinyl stickers' },
    { href: '/helmet-stickers/', anchor: 'reflective helmet and safety decals' },
  ],
  'custom-labels-and-stickers': [
    { href: '/packaging-labels/', anchor: 'custom product packaging labels' },
    { href: '/die-cut-labels/', anchor: 'precision die cut label printing' },
    { href: '/artwork-guidelines/', anchor: 'label artwork preparation guide' },
  ],
  'die-cut-labels': [
    { href: '/packaging-labels/', anchor: 'professional product packaging labels' },
    { href: '/custom-labels-and-stickers/', anchor: 'complete custom label printing service' },
    { href: '/sticker-materials/', anchor: 'die cut label material options' },
  ],
  'custom-business-stickers': [
    { href: '/promotional-stickers/', anchor: 'bulk promotional marketing stickers' },
    { href: '/packaging-labels/', anchor: 'branded product packaging labels' },
    { href: '/custom-corporate-stickers/', anchor: 'premium corporate branding stickers' },
  ],
  'outdoor-stickers': [
    { href: '/waterproof-stickers/', anchor: '100% waterproof sticker printing' },
    { href: '/reflective-stickers/', anchor: 'high-visibility reflective stickers' },
    { href: '/bumper-stickers/', anchor: 'heavy-duty bumper sticker printing' },
  ],
  'indoor-stickers': [
    { href: '/window-stickers/', anchor: 'professional window sticker printing' },
    { href: '/bathroom-wall-art-stickers/', anchor: 'waterproof bathroom wall decals' },
    { href: '/reusable-stickers/', anchor: 'removable repositionable stickers' },
  ],
  'window-stickers': [
    { href: '/custom-clear-stickers/', anchor: 'transparent clear vinyl stickers' },
    { href: '/car-stickers/', anchor: 'custom vehicle window decals' },
    { href: '/transfer-stickers/', anchor: 'professional vinyl transfer stickers' },
  ],
  'paper-stickers': [
    { href: '/custom-eco-friendly-stickers/', anchor: 'eco-friendly sustainable sticker printing' },
    { href: '/die-cut-paper-stickers/', anchor: 'die cut paper label printing' },
    { href: '/packaging-labels/', anchor: 'custom paper product labels' },
  ],
  'custom-eco-friendly-stickers': [
    { href: '/paper-stickers/', anchor: 'eco-friendly paper sticker printing' },
    { href: '/packaging-labels/', anchor: 'sustainable product packaging labels' },
    { href: '/sticker-materials/', anchor: 'eco-friendly sticker material options' },
  ],
  'reusable-stickers': [
    { href: '/window-stickers/', anchor: 'removable window cling stickers' },
    { href: '/indoor-stickers/', anchor: 'custom interior surface stickers' },
    { href: '/custom-eco-friendly-stickers/', anchor: 'eco-friendly repositionable stickers' },
  ],
  'die-cut-decals': [
    { href: '/car-stickers/', anchor: 'custom vehicle stickers and decals' },
    { href: '/window-stickers/', anchor: 'professional window decal printing' },
    { href: '/outdoor-stickers/', anchor: 'weatherproof outdoor vinyl decals' },
  ],
  'custom-laptop-stickers': [
    { href: '/water-bottle-stickers/', anchor: 'custom waterproof bottle stickers' },
    { href: '/die-cut-stickers/', anchor: 'precision die cut sticker shapes' },
    { href: '/custom-vinyl-stickers/', anchor: 'removable vinyl sticker printing' },
  ],
  'hydro-flask-stickers': [
    { href: '/water-bottle-stickers/', anchor: 'custom water bottle and flask stickers' },
    { href: '/waterproof-stickers/', anchor: 'dishwasher-safe waterproof vinyl stickers' },
    { href: '/die-cut-stickers/', anchor: 'custom die cut shape stickers' },
  ],
  'water-bottle-stickers': [
    { href: '/hydro-flask-stickers/', anchor: 'custom Hydro Flask bottle decals' },
    { href: '/waterproof-stickers/', anchor: 'fully waterproof vinyl sticker printing' },
    { href: '/packaging-labels/', anchor: 'curved surface product label printing' },
  ],
  'holographic-die-cut-stickers': [
    { href: '/custom-holographic-stickers/', anchor: 'holographic rainbow foil sticker printing' },
    { href: '/die-cut-stickers/', anchor: 'precision die cut sticker printing' },
    { href: '/metallic-stickers/', anchor: 'metallic and foil sticker options' },
  ],
  'sticker-hologram': [
    { href: '/custom-holographic-stickers/', anchor: 'holographic foil effect stickers' },
    { href: '/custom-tamper-proof-stickers/', anchor: 'tamper-evident security label printing' },
    { href: '/custom-eggshell-stickers/', anchor: 'destructible permanent security stickers' },
  ],
  'custom-tamper-proof-stickers': [
    { href: '/sticker-hologram/', anchor: 'holographic security seal stickers' },
    { href: '/custom-eggshell-stickers/', anchor: 'ultra-destructible eggshell stickers' },
    { href: '/packaging-labels/', anchor: 'professional tamper-evident packaging labels' },
  ],
  'custom-corporate-stickers': [
    { href: '/custom-business-stickers/', anchor: 'custom logo and brand stickers' },
    { href: '/embossed-gold-foil-stickers/', anchor: 'premium embossed foil corporate stickers' },
    { href: '/promotional-stickers/', anchor: 'bulk corporate promotional stickers' },
  ],
  'double-sided-stickers': [
    { href: '/window-stickers/', anchor: 'custom window and glass sticker printing' },
    { href: '/hang-tag-stickers/', anchor: 'professional product hang tag stickers' },
    { href: '/custom-sticker-printing/', anchor: 'professional two-sided sticker printing' },
  ],
  'embossed-gold-foil-stickers': [
    { href: '/metallic-stickers/', anchor: 'metallic silver and chrome sticker printing' },
    { href: '/embossed-certificate-stickers/', anchor: 'official seal and certificate stickers' },
    { href: '/black-embossed-stickers/', anchor: 'bold black embossed sticker printing' },
  ],
  'embossed-paper-stickers': [
    { href: '/embossed-gold-foil-stickers/', anchor: 'luxury gold foil embossed label printing' },
    { href: '/packaging-labels/', anchor: 'premium tactile packaging label printing' },
    { href: '/black-embossed-stickers/', anchor: 'bold black raised texture stickers' },
  ],
  'black-embossed-stickers': [
    { href: '/embossed-gold-foil-stickers/', anchor: 'gold foil luxury sticker printing' },
    { href: '/metallic-stickers/', anchor: 'metallic finish sticker printing' },
    { href: '/embossed-paper-stickers/', anchor: 'embossed paper label printing' },
  ],
  'embossed-certificate-stickers': [
    { href: '/embossed-gold-foil-stickers/', anchor: 'gold foil luxury seal sticker printing' },
    { href: '/custom-corporate-stickers/', anchor: 'premium corporate branding stickers' },
    { href: '/embossed-paper-stickers/', anchor: 'raised texture embossed label printing' },
  ],
  'lenticular-stickers': [
    { href: '/custom-lenticular-stickers/', anchor: 'personalized 3D lenticular sticker printing' },
    { href: '/motion-stickers/', anchor: 'dynamic motion effect sticker printing' },
    { href: '/custom-holographic-stickers/', anchor: 'holographic rainbow foil stickers' },
  ],
  'custom-lenticular-stickers': [
    { href: '/lenticular-stickers/', anchor: '3D flip effect lenticular sticker printing' },
    { href: '/anime-lenticular-stickers/', anchor: 'anime character lenticular sticker printing' },
    { href: '/motion-stickers/', anchor: 'custom motion animation effect stickers' },
  ],
  'anime-lenticular-stickers': [
    { href: '/custom-lenticular-stickers/', anchor: 'personalized 3D lenticular sticker printing' },
    { href: '/cute-anime-peeker-stickers/', anchor: 'adorable anime peeker sticker designs' },
    { href: '/anime-car-decal-stickers/', anchor: 'weatherproof anime vehicle decal printing' },
  ],
  'motion-stickers': [
    { href: '/lenticular-stickers/', anchor: '3D depth and flip effect lenticular stickers' },
    { href: '/custom-holographic-stickers/', anchor: 'holographic shimmer effect stickers' },
    { href: '/custom-lenticular-stickers/', anchor: 'personalized lenticular animation stickers' },
  ],
  'large-custom-stickers': [
    { href: '/large-die-cut-stickers/', anchor: 'large format die cut sticker printing' },
    { href: '/outdoor-stickers/', anchor: 'UV-resistant large outdoor vinyl stickers' },
    { href: '/window-stickers/', anchor: 'large window and storefront sticker printing' },
  ],
  'large-die-cut-stickers': [
    { href: '/large-custom-stickers/', anchor: 'big format custom sticker printing' },
    { href: '/outdoor-stickers/', anchor: 'weatherproof large outdoor stickers' },
    { href: '/die-cut-stickers/', anchor: 'precision die cut sticker printing' },
  ],
  'small-custom-stickers': [
    { href: '/1-5-inch-round-stickers/', anchor: 'small round circle label printing' },
    { href: '/custom-labels-and-stickers/', anchor: 'professional small product label printing' },
    { href: '/packaging-labels/', anchor: 'small custom product packaging labels' },
  ],
  '1-5-inch-round-stickers': [
    { href: '/small-custom-stickers/', anchor: 'small custom sticker printing' },
    { href: '/clear-round-stickers/', anchor: 'transparent round seal sticker printing' },
    { href: '/packaging-labels/', anchor: 'round product seal label printing' },
  ],
  '2-inch-star-stickers': [
    { href: '/small-custom-stickers/', anchor: 'small custom die cut stickers' },
    { href: '/school-stickers/', anchor: 'custom classroom reward sticker printing' },
    { href: '/1-5-inch-round-stickers/', anchor: 'small circle label printing' },
  ],
  'clear-round-stickers': [
    { href: '/1-5-inch-round-stickers/', anchor: 'small round product label printing' },
    { href: '/custom-clear-stickers/', anchor: 'transparent vinyl sticker printing' },
    { href: '/packaging-labels/', anchor: 'clear packaging seal label printing' },
  ],
  'custom-square-stickers': [
    { href: '/die-cut-stickers/', anchor: 'custom shape die cut sticker printing' },
    { href: '/packaging-labels/', anchor: 'clean square product packaging labels' },
    { href: '/custom-labels-and-stickers/', anchor: 'professional square label printing' },
  ],
  'custom-die-cut-stickers': [
    { href: '/die-cut-stickers/', anchor: 'standard die cut sticker printing' },
    { href: '/die-cut-vinyl-stickers/', anchor: 'vinyl die cut sticker printing' },
    { href: '/die-cut-clear-stickers/', anchor: 'clear transparent die cut stickers' },
  ],
  'die-cut-vinyl-stickers': [
    { href: '/die-cut-stickers/', anchor: 'premium die cut sticker printing' },
    { href: '/custom-vinyl-stickers/', anchor: 'waterproof vinyl sticker materials' },
    { href: '/die-cut-waterproof-stickers/', anchor: 'weatherproof die cut vinyl stickers' },
  ],
  'die-cut-clear-stickers': [
    { href: '/custom-clear-stickers/', anchor: 'custom transparent vinyl stickers' },
    { href: '/window-stickers/', anchor: 'clear glass and window sticker printing' },
    { href: '/die-cut-stickers/', anchor: 'precision die cut sticker shapes' },
  ],
  'die-cut-logo-stickers': [
    { href: '/custom-business-stickers/', anchor: 'professional business branding stickers' },
    { href: '/packaging-labels/', anchor: 'branded product packaging label printing' },
    { href: '/die-cut-stickers/', anchor: 'precision shape die cut sticker printing' },
  ],
  'die-cut-paper-stickers': [
    { href: '/paper-stickers/', anchor: 'eco-friendly paper sticker printing' },
    { href: '/custom-eco-friendly-stickers/', anchor: 'sustainable eco-friendly sticker printing' },
    { href: '/die-cut-stickers/', anchor: 'precision die cut sticker cutting' },
  ],
  'die-cut-waterproof-stickers': [
    { href: '/waterproof-stickers/', anchor: '100% waterproof vinyl sticker printing' },
    { href: '/outdoor-stickers/', anchor: 'heavy-duty outdoor weatherproof stickers' },
    { href: '/die-cut-stickers/', anchor: 'precision shape die cut stickers' },
  ],
  'custom-graffiti-stickers': [
    { href: '/custom-ig-stickers/', anchor: 'custom Instagram social media stickers' },
    { href: '/die-cut-stickers/', anchor: 'custom die cut sticker shapes' },
    { href: '/custom-vinyl-stickers/', anchor: 'bold vinyl sticker printing' },
  ],
  'custom-eggshell-stickers': [
    { href: '/custom-tamper-proof-stickers/', anchor: 'tamper-evident security seal stickers' },
    { href: '/sticker-hologram/', anchor: 'holographic security authentication stickers' },
    { href: '/custom-business-stickers/', anchor: 'durable professional business stickers' },
  ],
  'custom-ig-stickers': [
    { href: '/promotional-stickers/', anchor: 'bulk promotional marketing stickers' },
    { href: '/custom-graffiti-stickers/', anchor: 'bold street art style sticker printing' },
    { href: '/die-cut-stickers/', anchor: 'custom die cut sticker printing' },
  ],
  'custom-ink-stickers': [
    { href: '/custom-sticker-printing/', anchor: 'full-color CMYK sticker printing service' },
    { href: '/glossy-stickers/', anchor: 'high-gloss laminated sticker printing' },
    { href: '/sticker-printing-options/', anchor: 'advanced print finish and coating options' },
  ],
  'custom-price-stickers': [
    { href: '/packaging-labels/', anchor: 'retail product packaging labels' },
    { href: '/custom-labels-and-stickers/', anchor: 'professional business label printing' },
    { href: '/custom-service-stickers/', anchor: 'custom service reminder sticker printing' },
  ],
  'custom-service-stickers': [
    { href: '/custom-oil-change-stickers/', anchor: 'auto oil change reminder sticker printing' },
    { href: '/automotive-service-stickers/', anchor: 'professional automotive service labels' },
    { href: '/air-conditioning-service-stickers/', anchor: 'HVAC service reminder label printing' },
  ],
  'custom-oil-change-stickers': [
    { href: '/custom-service-stickers/', anchor: 'custom service reminder sticker printing' },
    { href: '/automotive-service-stickers/', anchor: 'professional auto shop reminder labels' },
    { href: '/air-conditioning-service-stickers/', anchor: 'HVAC and AC service reminder stickers' },
  ],
  'air-conditioning-service-stickers': [
    { href: '/custom-oil-change-stickers/', anchor: 'auto oil change reminder label printing' },
    { href: '/custom-service-stickers/', anchor: 'professional service reminder sticker printing' },
    { href: '/automotive-service-stickers/', anchor: 'complete auto service label solutions' },
  ],
  'automotive-service-stickers': [
    { href: '/custom-service-stickers/', anchor: 'professional service reminder labels' },
    { href: '/custom-oil-change-stickers/', anchor: 'custom oil change interval sticker printing' },
    { href: '/air-conditioning-service-stickers/', anchor: 'HVAC service maintenance reminder stickers' },
  ],
  'bakery-stickers': [
    { href: '/packaging-labels/', anchor: 'food-safe product packaging labels' },
    { href: '/cake-stickers/', anchor: 'custom cake packaging stickers' },
    { href: '/mailer-box-stickers/', anchor: 'branded bakery box and packaging stickers' },
  ],
  'cake-stickers': [
    { href: '/bakery-stickers/', anchor: 'custom bakery food label printing' },
    { href: '/personalised-sweet-cone-stickers/', anchor: 'personalised candy and sweet treat labels' },
    { href: '/packaging-labels/', anchor: 'elegant food packaging label printing' },
  ],
  'thank-you-stickers': [
    { href: '/packaging-labels/', anchor: 'professional product packaging labels' },
    { href: '/clear-round-stickers/', anchor: 'clear round seal sticker printing' },
    { href: '/thank-you-for-supporting-my-small-business-stickers/', anchor: 'small business customer appreciation stickers' },
  ],
  'thank-you-for-supporting-my-small-business-stickers': [
    { href: '/thank-you-stickers/', anchor: 'custom thank you packaging stickers' },
    { href: '/mailer-box-stickers/', anchor: 'branded mailer box sticker printing' },
    { href: '/clear-round-stickers/', anchor: 'clear envelope seal sticker printing' },
  ],
  'christmas-stickers': [
    { href: '/christmas-candle-stickers/', anchor: 'festive Christmas candle label printing' },
    { href: '/christmas-sticker-cards/', anchor: 'custom Christmas greeting card stickers' },
    { href: '/packaging-labels/', anchor: 'seasonal holiday packaging labels' },
  ],
  'christmas-sticker-cards': [
    { href: '/christmas-stickers/', anchor: 'custom Christmas sticker printing' },
    { href: '/christmas-envelope-stickers/', anchor: 'festive holiday envelope seal stickers' },
    { href: '/thank-you-stickers/', anchor: 'personalized customer thank you stickers' },
  ],
  'christmas-cookie-stickers': [
    { href: '/bakery-stickers/', anchor: 'custom bakery food label printing' },
    { href: '/christmas-stickers/', anchor: 'festive Christmas holiday sticker printing' },
    { href: '/packaging-labels/', anchor: 'holiday cookie box packaging labels' },
  ],
  'christmas-candle-stickers': [
    { href: '/christmas-stickers/', anchor: 'custom Christmas sticker printing' },
    { href: '/custom-labels-and-stickers/', anchor: 'custom candle jar label printing' },
    { href: '/packaging-labels/', anchor: 'elegant candle product label printing' },
  ],
  'christmas-candy-stickers': [
    { href: '/personalised-sweet-cone-stickers/', anchor: 'personalised candy treat bag stickers' },
    { href: '/christmas-stickers/', anchor: 'festive Christmas sticker printing' },
    { href: '/packaging-labels/', anchor: 'holiday confectionery packaging labels' },
  ],
  'christmas-dog-stickers': [
    { href: '/christmas-stickers/', anchor: 'custom Christmas holiday sticker printing' },
    { href: '/die-cut-stickers/', anchor: 'custom die cut pet sticker shapes' },
    { href: '/promotional-stickers/', anchor: 'fun branded holiday promotional stickers' },
  ],
  'christmas-envelope-stickers': [
    { href: '/christmas-sticker-cards/', anchor: 'custom Christmas card sticker printing' },
    { href: '/clear-round-stickers/', anchor: 'clear round envelope seal stickers' },
    { href: '/christmas-stickers/', anchor: 'festive holiday sticker printing' },
  ],
  'halloween-stickers': [
    { href: '/christmas-stickers/', anchor: 'custom seasonal holiday sticker printing' },
    { href: '/die-cut-stickers/', anchor: 'custom die cut spooky sticker shapes' },
    { href: '/promotional-stickers/', anchor: 'custom seasonal promotional sticker printing' },
  ],
  'school-stickers': [
    { href: '/2-inch-star-stickers/', anchor: 'custom star-shaped reward stickers' },
    { href: '/inspirational-stickers/', anchor: 'motivational quote sticker printing' },
    { href: '/motivational-stickers/', anchor: 'custom motivational sticker sheet printing' },
  ],
  'inspirational-stickers': [
    { href: '/motivational-stickers/', anchor: 'custom motivational sticker sheet printing' },
    { href: '/school-stickers/', anchor: 'classroom reward and recognition stickers' },
    { href: '/die-cut-stickers/', anchor: 'custom die cut inspirational sticker shapes' },
  ],
  'motivational-stickers': [
    { href: '/inspirational-stickers/', anchor: 'custom inspirational quote sticker printing' },
    { href: '/school-stickers/', anchor: 'educational reward and classroom stickers' },
    { href: '/sticker-printing-options/', anchor: 'premium sticker print and finish options' },
  ],
  'custom-suncatcher-stickers': [
    { href: '/window-stickers/', anchor: 'custom window cling and adhesive stickers' },
    { href: '/reusable-stickers/', anchor: 'removable and repositionable sticker printing' },
    { href: '/indoor-stickers/', anchor: 'decorative indoor surface sticker printing' },
  ],
  'bathroom-wall-art-stickers': [
    { href: '/indoor-stickers/', anchor: 'custom interior decorative sticker printing' },
    { href: '/waterproof-stickers/', anchor: 'moisture-resistant waterproof vinyl stickers' },
    { href: '/reusable-stickers/', anchor: 'removable and repositionable wall stickers' },
  ],
  'helmet-stickers': [
    { href: '/reflective-stickers/', anchor: 'high-visibility reflective safety stickers' },
    { href: '/outdoor-stickers/', anchor: 'UV-resistant weatherproof outdoor stickers' },
    { href: '/car-stickers/', anchor: 'custom vehicle and automotive decal printing' },
  ],
  'anime-car-decal-stickers': [
    { href: '/car-stickers/', anchor: 'custom car and vehicle decal printing' },
    { href: '/cute-anime-peeker-stickers/', anchor: 'adorable anime peeker sticker designs' },
    { href: '/anime-lenticular-stickers/', anchor: '3D anime lenticular sticker printing' },
  ],
  'cute-anime-peeker-stickers': [
    { href: '/anime-car-decal-stickers/', anchor: 'anime character vehicle decal printing' },
    { href: '/peeker-stickers/', anchor: 'custom character peeker sticker printing' },
    { href: '/anime-lenticular-stickers/', anchor: '3D anime flip effect stickers' },
  ],
  'peeker-stickers': [
    { href: '/cute-anime-peeker-stickers/', anchor: 'cute anime character peeker stickers' },
    { href: '/die-cut-stickers/', anchor: 'custom die cut character sticker shapes' },
    { href: '/custom-vinyl-stickers/', anchor: 'durable adhesive vinyl sticker printing' },
  ],
  'pochita-stickers': [
    { href: '/cute-anime-peeker-stickers/', anchor: 'cute anime peeker sticker printing' },
    { href: '/anime-lenticular-stickers/', anchor: '3D anime lenticular sticker printing' },
    { href: '/die-cut-stickers/', anchor: 'precision die cut sticker printing' },
  ],
  'mosquito-stickers': [
    { href: '/mosquito-repellent-stickers/', anchor: 'custom mosquito repellent product labels' },
    { href: '/outdoor-stickers/', anchor: 'weatherproof outdoor vinyl sticker printing' },
    { href: '/custom-service-stickers/', anchor: 'professional service business label printing' },
  ],
  'mosquito-repellent-stickers': [
    { href: '/mosquito-stickers/', anchor: 'custom mosquito and pest control stickers' },
    { href: '/packaging-labels/', anchor: 'professional health product label printing' },
    { href: '/custom-business-stickers/', anchor: 'branded professional business stickers' },
  ],
  'mailer-box-stickers': [
    { href: '/packaging-labels/', anchor: 'custom product packaging label printing' },
    { href: '/thank-you-stickers/', anchor: 'customer thank you order packaging stickers' },
    { href: '/custom-business-stickers/', anchor: 'professional e-commerce branding stickers' },
  ],
  'hang-tag-stickers': [
    { href: '/packaging-labels/', anchor: 'professional retail product labels' },
    { href: '/custom-labels-and-stickers/', anchor: 'custom retail tag and label printing' },
    { href: '/double-sided-stickers/', anchor: 'double-sided product tag sticker printing' },
  ],
  'hello-my-name-is-stickers': [
    { href: '/promotional-stickers/', anchor: 'custom event promotional sticker printing' },
    { href: '/school-stickers/', anchor: 'custom school and classroom label printing' },
    { href: '/custom-business-stickers/', anchor: 'professional corporate name badge stickers' },
  ],
  'personalised-pizza-box-stickers': [
    { href: '/bakery-stickers/', anchor: 'food-safe bakery packaging label printing' },
    { href: '/mailer-box-stickers/', anchor: 'branded box and packaging sticker printing' },
    { href: '/packaging-labels/', anchor: 'professional food packaging label printing' },
  ],
  'personalised-sweet-cone-stickers': [
    { href: '/cake-stickers/', anchor: 'custom cake and dessert packaging stickers' },
    { href: '/christmas-candy-stickers/', anchor: 'festive holiday candy and treat stickers' },
    { href: '/packaging-labels/', anchor: 'custom confectionery packaging label printing' },
  ],
  'stickers-and-labels': [
    { href: '/custom-sticker-printing/', anchor: 'professional full-color sticker printing' },
    { href: '/die-cut-labels/', anchor: 'precision die cut label printing service' },
    { href: '/packaging-labels/', anchor: 'custom product packaging label printing' },
  ],
  'custom-stickers-for-mylar-bags': [
    { href: '/packaging-labels/', anchor: 'custom product packaging label printing' },
    { href: '/waterproof-stickers/', anchor: 'moisture-resistant adhesive label printing' },
    { href: '/custom-labels-and-stickers/', anchor: 'complete custom label printing service' },
  ],
  'transfer-stickers': [
    { href: '/window-stickers/', anchor: 'custom glass and window sticker printing' },
    { href: '/indoor-stickers/', anchor: 'professional indoor surface sticker printing' },
    { href: '/die-cut-decals/', anchor: 'precision die cut vinyl decals' },
  ],
  'pro-cut-vinyl-stickers': [
    { href: '/custom-vinyl-stickers/', anchor: 'standard custom vinyl sticker printing' },
    { href: '/car-stickers/', anchor: 'professional vehicle and signage decals' },
    { href: '/die-cut-stickers/', anchor: 'precision die cut sticker cutting' },
  ],
  'bat-knob-stickers': [
    { href: '/helmet-stickers/', anchor: 'custom sports helmet and equipment decals' },
    { href: '/outdoor-stickers/', anchor: 'durable outdoor weather-resistant stickers' },
    { href: '/custom-vinyl-stickers/', anchor: 'heavy-duty vinyl sticker printing' },
  ],
  'burger-branding-stickers': [
    { href: '/personalised-pizza-box-stickers/', anchor: 'custom pizza box branding sticker printing' },
    { href: '/packaging-labels/', anchor: 'professional food packaging label printing' },
    { href: '/bakery-stickers/', anchor: 'food-safe restaurant and bakery label printing' },
  ],
  'cornish-flag-car-stickers': [
    { href: '/car-stickers/', anchor: 'custom car sticker and decal printing' },
    { href: '/bumper-stickers/', anchor: 'heavy-duty bumper sticker printing' },
    { href: '/outdoor-stickers/', anchor: 'weatherproof outdoor vinyl sticker printing' },
  ],
};

const defaultLinks: [InternalLink, InternalLink, InternalLink] = [
  { href: '/custom-sticker-printing/', anchor: 'professional sticker printing services' },
  { href: '/sticker-materials/', anchor: 'premium sticker material options' },
  { href: '/artwork-guidelines/', anchor: 'artwork file preparation guidelines' },
];

export function getInternalLinks(slug: string): [InternalLink, InternalLink, InternalLink] {
  return (linkMap[slug] ?? defaultLinks) as [InternalLink, InternalLink, InternalLink];
}

// ------- CATEGORY FAQ TEMPLATES -------
// {product} is replaced at runtime with the product name

const categoryFAQTemplates: Record<string, FAQItem[]> = {
  core: [
    { q: 'What is the minimum order quantity for {product}?', a: 'The minimum order for {product} is 50 units. We offer competitive pricing at 50, 100, 250, 500, 1,000 and above — with greater bulk savings at higher quantities.' },
    { q: 'Are {product} waterproof?', a: 'Yes, our vinyl-based {product} are fully waterproof and UV-resistant, rated for 3–5 years of outdoor exposure. Paper-based options are for indoor use only.' },
    { q: 'What file formats do you accept for {product} designs?', a: 'We accept AI, EPS, PDF, and SVG vector files for the sharpest results. High-resolution PNG or JPG files at 300 DPI minimum are also accepted.' },
    { q: 'Can {product} be die cut to a custom shape?', a: 'Yes. All our products support custom die cutting to any shape you can draw. Upload your artwork and we\'ll cut precisely to the outline.' },
    { q: 'How long does production take for {product}?', a: 'Standard production is 3–5 business days after artwork approval. Rush production (1–2 business days) is available at an additional charge.' },
    { q: 'What material are {product} printed on?', a: 'We print {product} on premium cast or calendared vinyl depending on your application. We also offer clear vinyl, paper, and specialty materials.' },
    { q: 'Do {product} leave residue when removed?', a: 'Standard permanent adhesive may leave residue on some surfaces. We also offer removable adhesive options that peel off cleanly — just let us know your application.' },
    { q: 'What is the maximum size for {product}?', a: 'Standard {product} go up to 12"×12". Larger formats are available on request — contact us with your dimensions and we\'ll advise on the best approach.' },
    { q: 'Can I order {product} with rounded corners?', a: 'Yes. Rounded corners are a standard option. Specify your preferred corner radius when ordering and it\'ll be included in your digital proof.' },
    { q: 'Do you send a proof before printing {product}?', a: 'Yes, every order includes a free digital proof. Production doesn\'t begin until you review and approve the proof — no surprises, no hidden changes.' },
  ],
  specialty: [
    { q: 'What makes {product} different from standard vinyl stickers?', a: '{product} feature a specialty finish — whether holographic foil, metallic chrome, raised emboss, or 3D lenticular effect — that standard vinyl simply cannot replicate.' },
    { q: 'Can {product} be die cut to any shape?', a: 'Yes. {product} are fully compatible with custom die cutting, so we can cut them to your exact design outline regardless of the specialty finish involved.' },
    { q: 'Are {product} suitable for outdoor use?', a: 'Most {product} are rated for limited outdoor use. UV exposure can affect specialty finishes over time — contact us about the specific outdoor durability for your application.' },
    { q: 'What file format is best for {product} designs?', a: 'Vector files (AI, EPS, PDF, SVG) are strongly preferred for {product} to ensure the specialty finish aligns precisely with your design elements without any loss of quality.' },
    { q: 'How does the special finish on {product} work?', a: 'Depending on the type, the finish is applied as a foil layer, a special coating, or a lenticular lens overlay before cutting. Each method creates a distinct visual effect.' },
    { q: 'Can {product} be used on product packaging?', a: 'Absolutely. {product} are especially popular for premium packaging because they create a memorable unboxing experience and make products stand out on shelves.' },
    { q: 'What is the minimum order for {product}?', a: 'The minimum order for {product} is 50 units. Specialty printing involves higher setup costs — contact us for a custom quote on your specific quantity.' },
    { q: 'How durable are {product}?', a: 'Durability varies by finish type. Most {product} are rated 1–3 years outdoors and indefinitely indoors when properly applied and not exposed to abrasion.' },
    { q: 'Will the special finish on {product} fade or scratch?', a: 'Our specialty finishes are protected by a clear laminate layer that guards against light scratches and normal handling. Avoid abrasive cleaning products.' },
    { q: 'Do I get a proof before {product} are printed?', a: 'Yes — every order includes a digital proof showing how the specialty finish will appear over your design. You must approve it before any production begins.' },
  ],
  business: [
    { q: 'How can {product} help with brand visibility?', a: '{product} are a cost-effective way to get your brand in front of more customers — on packaging, at events, in retail stores, and anywhere your products are seen.' },
    { q: 'Can {product} be customized with my company logo?', a: 'Yes. All {product} are printed from your supplied artwork. You can include your logo, brand colors, tagline, contact details, and any other branding elements.' },
    { q: 'What is the best material for {product} used commercially?', a: 'For most commercial applications, premium white or clear vinyl is the go-to choice. For indoor-only use, paper stock offers a cost-effective alternative.' },
    { q: 'Do you offer volume discounts on {product}?', a: 'Yes. Pricing on {product} drops significantly at 250, 500, 1,000, and above. The more you order, the lower your per-unit cost. Contact us for a bulk quote.' },
    { q: 'Can {product} match our brand\'s Pantone colors?', a: 'We can target Pantone colors through our CMYK printing process. For precise color matching, share your Pantone codes at the time of ordering.' },
    { q: 'What is the turnaround time for {product} bulk orders?', a: 'Standard production for {product} is 3–5 business days after artwork approval. For large bulk orders (5,000+), please allow 5–7 business days.' },
    { q: 'Can {product} include variable data like serial numbers?', a: 'Yes, we support variable data printing for {product}. This allows each sticker to carry a unique serial number, barcode, or QR code.' },
    { q: 'Are {product} suitable for labeling products in retail stores?', a: 'Yes. {product} are widely used in retail for price tags, brand seals, product info labels, and promotional displays across all categories.' },
    { q: 'What is the minimum order for {product}?', a: 'The minimum order for {product} is 50 units. For ongoing supply needs, we also offer standing order pricing to reduce your per-unit cost over time.' },
    { q: 'What is your return policy for {product} if there\'s a print error?', a: 'We guarantee print quality. If your {product} have a print defect or don\'t match the approved proof, we\'ll reprint the entire order at no charge.' },
  ],
  vehicle: [
    { q: 'How long will {product} stay on a vehicle?', a: '{product} printed on premium outdoor vinyl typically last 3–5 years on a vehicle\'s exterior without cracking, peeling, or significant fading.' },
    { q: 'Will {product} damage my car\'s paint when removed?', a: 'Our {product} are designed to be removable after use. Warm the sticker with a heat gun before removal and it should peel off without damaging the clear coat.' },
    { q: 'Are {product} weatherproof?', a: 'Yes. {product} are made from UV-resistant, waterproof outdoor vinyl that withstands rain, road grit, and intense sun exposure for years.' },
    { q: 'Can {product} go through a car wash?', a: '{product} applied to a clean, smooth paint surface can handle automated car washes. Avoid directing high-pressure nozzles at the sticker edges.' },
    { q: 'What surfaces can {product} be applied to?', a: '{product} adhere best to smooth, clean, paint-coated surfaces. They also work on glass, plastic, and metal panels with proper surface preparation.' },
    { q: 'Can I get {product} in a custom shape to match my vehicle\'s contours?', a: 'Yes. We die cut {product} to any custom shape. Provide a template based on your vehicle panel dimensions and we\'ll cut to fit precisely.' },
    { q: 'Do {product} fade in direct sunlight?', a: 'Our inks are UV-stabilized, meaning {product} resist fading for 3–5 years even in high-sun climates. Lamination adds an extra layer of UV protection.' },
    { q: 'How do I apply {product} without bubbles or wrinkles?', a: 'Clean the surface thoroughly, peel slowly, and use a squeegee to apply {product} from the center outward. Our artwork guidelines include an application guide.' },
    { q: 'Can {product} be applied to the inside of a car window?', a: 'Yes. For window applications, we recommend reverse-print clear vinyl so the graphic faces outward and the adhesive protects it from the elements.' },
    { q: 'What is the minimum order for {product}?', a: 'The minimum order for {product} is 50 units. Single-unit and small-batch orders under 50 are also available — contact us for small-run pricing.' },
  ],
  seasonal: [
    { q: 'How far in advance should I order {product}?', a: 'We recommend ordering {product} at least 2–3 weeks before your event or the start of the season. Production takes 3–5 business days plus shipping time.' },
    { q: 'Can {product} be customized with a personal design or message?', a: 'Yes. {product} can include any custom design, greeting, name, or seasonal message. Our team reviews all artwork before production begins.' },
    { q: 'Are {product} suitable for gift wrapping and packaging?', a: 'Absolutely. {product} make excellent packaging seals, envelope closures, gift tag stickers, and box decorations for seasonal gifting.' },
    { q: 'What is the minimum order for {product}?', a: 'The minimum order for {product} is 50 units — perfect for a small batch. Bulk orders of 500+ save significantly for larger seasonal campaigns.' },
    { q: 'Can I rush order {product} if I need them quickly?', a: 'Yes. Rush production options are available for {product} with a 1–2 business day turnaround at an additional fee. Contact us to check current availability.' },
    { q: 'Are {product} removable after the season?', a: 'Standard {product} use permanent adhesive, but we offer removable adhesive on request — ideal for temporary seasonal displays you plan to clean up afterward.' },
    { q: 'What sizes are available for {product}?', a: '{product} are available in any custom size. Common seasonal sizes range from 1"×1" label seals to 4"×6" decorative designs for packaging.' },
    { q: 'Can I include a QR code on {product} for a digital experience?', a: 'Yes. QR codes can be incorporated into your {product} design — perfect for linking to a gift registry, seasonal promotion, or digital greeting.' },
    { q: 'Are {product} suitable for outdoor use in winter conditions?', a: 'Vinyl-based {product} are waterproof and cold-resistant, making them suitable for winter outdoor use. Paper-based options are for indoor use only.' },
    { q: 'Can businesses order {product} in bulk with their own branding?', a: 'Yes. {product} are popular for branded seasonal campaigns, customer gift packaging, and promotional giveaways. Bulk pricing starts at 250 units.' },
  ],
  food: [
    { q: 'Are {product} food safe?', a: '{product} are designed for food packaging surfaces — bags, boxes, and wrappers — not for direct contact with food itself. They meet standard commercial packaging requirements.' },
    { q: 'Are {product} grease-resistant?', a: 'Yes. Our vinyl-based {product} resist grease and moisture, making them ideal for bakeries, restaurants, and food delivery packaging where contamination is common.' },
    { q: 'Can {product} withstand refrigeration?', a: 'Yes. Vinyl {product} with a strong adhesive are rated for refrigerated and freezer environments. Please specify this requirement when placing your order.' },
    { q: 'What material is best for {product} on food packaging?', a: 'White vinyl with permanent adhesive is the most popular choice for {product} on food packaging. Clear vinyl is ideal for packaging that showcases the product.' },
    { q: 'Can {product} include ingredient or nutritional information?', a: 'Yes. {product} can be printed with any text, including ingredients, allergen warnings, and brand information. Include all required text in your artwork file.' },
    { q: 'Do {product} comply with FDA labeling standards?', a: 'Our materials meet standard commercial specifications. For regulated food products, always verify material compliance against your specific FDA requirements.' },
    { q: 'Can I get {product} in a custom shape for my packaging?', a: 'Yes. {product} can be die cut to any custom shape — round, rectangular, or a form that matches your specific packaging design perfectly.' },
    { q: 'What is the minimum order for {product}?', a: 'The minimum order for {product} is 50 units. Food businesses and bakeries ordering 500+ see the best per-unit pricing for ongoing supply.' },
    { q: 'How do I submit text for ingredients and allergens on {product}?', a: 'Include all text in your artwork file (AI, EPS, PDF, or SVG preferred). Our team reviews legibility during the artwork check before approving for print.' },
    { q: 'Do you offer fast turnaround for {product} for last-minute orders?', a: 'Yes. Rush production for {product} is available — typically 1–2 business days at an additional charge. Contact us to confirm current availability.' },
  ],
  personal: [
    { q: 'Will {product} damage my device or surface when removed?', a: '{product} use removable vinyl that peels off cleanly from most hard surfaces — laptop lids, water bottles, phone cases — without leaving residue.' },
    { q: 'Are {product} waterproof?', a: 'Yes. {product} are made from waterproof vinyl that handles moisture and light splashing. Water bottle versions are dishwasher safe on the top rack.' },
    { q: 'Can I design my own {product}?', a: 'Absolutely. {product} are fully custom — upload your own design, artwork, or photo and we\'ll print it exactly as you\'ve supplied it.' },
    { q: 'What is the minimum order for {product}?', a: 'The minimum order for {product} is 50 units. This makes them perfect for small personal orders, fan merchandise runs, or personalized gifts.' },
    { q: 'Can {product} be applied to curved surfaces like bottles?', a: 'Yes. {product} use a flexible vinyl that conforms to gently curved surfaces including water bottles, helmets, and phone cases without creasing.' },
    { q: 'How long do {product} last?', a: '{product} on indoor surfaces typically last 2–3 years with normal use. Outdoor or high-friction applications may show wear sooner depending on conditions.' },
    { q: 'Do {product} leave a sticky residue when removed?', a: 'Our {product} use a clean-removal adhesive designed to peel off without residue on smooth, hard surfaces like glass, metal, and hard plastic.' },
    { q: 'Can I order {product} as a gift?', a: '{product} make excellent personalized gifts. We can ship directly to a recipient\'s address — just include the shipping address in your order.' },
    { q: 'What file format should I use for my {product} design?', a: 'For the sharpest print, submit AI, EPS, PDF, or SVG vector files. PNG files at 300 DPI minimum are also accepted for photo-based designs.' },
    { q: 'Can {product} be cut into custom shapes?', a: 'Yes. {product} can be die cut to any shape — include a cut outline in your artwork file or describe the shape you need in the order notes.' },
  ],
  home: [
    { q: 'Will {product} damage my walls or tiles?', a: '{product} are made with removable adhesive for most interior applications. They peel off cleanly from painted walls, tiles, and glass without residue in most cases.' },
    { q: 'Are {product} suitable for bathroom or wet room environments?', a: 'Yes. {product} are made from moisture-resistant vinyl that handles the humidity and occasional water splashing typical in bathroom environments.' },
    { q: 'Can {product} be used on textured walls?', a: 'Smooth and semi-smooth surfaces work best for {product}. Highly textured walls reduce adhesion — a smooth primer surface gives the best long-term results.' },
    { q: 'How do I apply {product} without bubbles?', a: 'Clean the surface, let it dry fully, then peel slowly and press from the center outward using a squeegee or credit card. Take your time for best results.' },
    { q: 'Can {product} be repositioned after application?', a: '{product} can be gently peeled and repositioned within minutes of initial application. After 24–48 hours the adhesive sets and repositioning may affect bond strength.' },
    { q: 'What is the maximum size available for {product}?', a: 'Standard {product} go up to 12"×12". For larger wall art applications, we can produce {product} as a multi-panel set — contact us to discuss your project.' },
    { q: 'Are {product} suitable for rental properties?', a: 'Yes. With removable adhesive, {product} are popular in rental properties because they don\'t damage walls and can be taken down without issue when moving.' },
    { q: 'How long do {product} last on walls?', a: '{product} on interior walls typically last 3–5 years before edges may start to lift. Humidity and temperature fluctuations in bathrooms can affect longevity.' },
    { q: 'Can I get {product} in a custom color to match my decor?', a: 'Yes. {product} are printed in full color from your supplied artwork. Submit a design with your chosen colors and we\'ll match it as closely as possible.' },
    { q: 'Do {product} come with installation instructions?', a: 'Yes. All {product} orders include a basic application guide. For larger wall pieces, we recommend watching the installation guide on our website first.' },
  ],
  sports: [
    { q: 'Will {product} stay on during active play?', a: '{product} use a strong permanent adhesive designed to withstand impact, vibration, and sweat during play. Apply to a clean, dry surface for the strongest bond.' },
    { q: 'Are {product} impact-resistant?', a: 'Yes. {product} are made from a durable flexible vinyl that absorbs minor impacts and flexes with the equipment surface rather than cracking or peeling.' },
    { q: 'Can {product} be personalized with a player name and number?', a: 'Absolutely. {product} can be printed with any player name, number, team logo, or combination. Include your details in the artwork or order notes.' },
    { q: 'Are {product} waterproof and sweat-proof?', a: 'Yes. {product} are made from waterproof vinyl that also resists sweat and moisture from outdoor play and humid training conditions.' },
    { q: 'What surfaces do {product} adhere to best?', a: '{product} adhere best to smooth, clean surfaces. For equipment with a textured or rubberized grip area, test adhesion with a small sample before full application.' },
    { q: 'Are {product} legal for competitive play?', a: 'Standard equipment customization stickers are generally permitted, but verify with your specific league or governing body before using {product} in competition.' },
    { q: 'How do I apply {product} to curved equipment surfaces?', a: 'Apply {product} slowly from one edge, smoothing down as you go to prevent wrinkles. Use a soft cloth to press firmly around the curve for a secure bond.' },
    { q: 'How long do {product} last with regular use?', a: 'With regular training and game use, {product} typically last one to two full seasons. Heavy weather exposure and high-friction use will affect longevity.' },
    { q: 'Can I order {product} for a whole team?', a: 'Yes. Bulk team orders are available with player-specific personalization on each unit. Contact us for team pricing on {product}.' },
    { q: 'What is the minimum order for {product}?', a: 'The minimum order for {product} is 50 units — perfect for a full team roster with extras. Single-unit orders are also available on request.' },
  ],
  educational: [
    { q: 'Are {product} safe for use with children?', a: 'Yes. {product} are made from non-toxic materials that are safe for handling by students of all ages. They contain no harmful chemicals or solvents.' },
    { q: 'Can teachers design custom {product} for their class?', a: 'Yes. {product} can be fully customized with class names, teacher names, reward messages, and school branding. Upload your artwork to our order form.' },
    { q: 'How many {product} come per sheet?', a: 'The number per sheet depends on the size. For example, 1" round stickers fit 30–40 per A4 sheet. We\'ll show the layout in your digital proof.' },
    { q: 'Are {product} removable from paper or notebooks?', a: 'Our removable {product} peel off paper cleanly. Standard permanent versions may tear paper. Let us know your use case and we\'ll recommend the right adhesive.' },
    { q: 'Can {product} be written on with a marker or pen?', a: 'Matte-finish {product} accept most permanent markers. Glossy-finish {product} require a paint marker or Sharpie for legible, lasting writing.' },
    { q: 'Do you offer school discount pricing for {product}?', a: 'Yes. Schools and educational institutions ordering in bulk (500+) qualify for educational pricing. Contact us with your requirements for a custom quote.' },
    { q: 'What size {product} work best for student reward charts?', a: '1"–1.5" round {product} are most popular for reward charts and planners — small enough for a grid but large enough to see the design clearly.' },
    { q: 'Can {product} be ordered with multiple designs in one order?', a: 'Yes. Include multiple artwork files in one order and we\'ll combine them on the most cost-effective sheet layout with separate designs.' },
    { q: 'How quickly can I get {product} for the start of term?', a: 'Standard production is 3–5 business days after artwork approval. Order 2 weeks before your term start date to ensure comfortable delivery.' },
    { q: 'What is the minimum order for {product}?', a: 'The minimum order for {product} is 50 units — ideal for a single classroom. Orders of 250+ are cost-effective for whole-school supply needs.' },
  ],
  events: [
    { q: 'Can {product} be personalized for each attendee?', a: 'Yes. With variable data printing, {product} can be personalized for each attendee with their name, job title, or other details — all produced in one order.' },
    { q: 'How long do {product} stick to clothing?', a: '{product} designed for clothing use a low-tack adhesive that stays put for a full-day event and peels off clothing without leaving residue afterward.' },
    { q: 'Can {product} be printed in multiple designs for a single event?', a: 'Yes. Order multiple artwork versions and we\'ll set them up as part of one combined print run for cost efficiency across your entire event.' },
    { q: 'How quickly can I get {product} for an upcoming event?', a: 'Standard production is 3–5 business days. Rush orders (1–2 days) are available. For events, order 10–14 days in advance to allow comfortable shipping time.' },
    { q: 'What size {product} is best for a name tag?', a: 'A 3"×2" or 3.5"×2.5" size works well for name tags, providing enough space for a name, title, and logo while remaining comfortable to wear all day.' },
    { q: 'Are {product} easy to write on for on-site customization?', a: 'Matte-finish {product} are writable with standard ballpoint or permanent marker. Order these if you plan to hand-write names at the event entrance.' },
    { q: 'Can {product} include a company logo or full event branding?', a: 'Yes. {product} can be printed with full event branding, sponsor logos, event dates, QR codes, and any other design elements you require.' },
    { q: 'Do {product} leave marks on clothing after removal?', a: 'Our event-grade {product} use a no-residue adhesive formula. On most fabrics they peel off cleanly, though results vary by fabric type and texture.' },
    { q: 'Can {product} include a QR code for event check-in?', a: 'Yes. QR codes integrate seamlessly into your {product} design — useful for digital check-in, session access, or linking to event schedules and resources.' },
    { q: 'What is the minimum order for {product}?', a: 'The minimum order for {product} is 50 units. For large events with 500+ attendees, we offer competitive bulk pricing and fast turnaround to meet your deadline.' },
  ],
  material: [
    { q: 'Are {product} environmentally friendly?', a: '{product} are produced from sustainable materials — recycled paper stock, FSC-certified paper, or eco-vinyl alternatives — with water-based inks where possible.' },
    { q: 'Are {product} recyclable?', a: 'Paper-based {product} are recyclable along with the product packaging they\'re applied to. Plastic-based vinyl options are not currently recyclable.' },
    { q: 'Can {product} be used outdoors?', a: 'Paper-based {product} are for indoor use only — they\'re not waterproof or UV-resistant. For outdoor applications, we recommend our vinyl range instead.' },
    { q: 'What adhesive is used on {product}?', a: '{product} use a water-based, non-toxic adhesive suitable for most paper, cardboard, and lightweight packaging surfaces without causing damage.' },
    { q: 'What print quality can I expect from {product}?', a: '{product} are printed using high-resolution digital printing. Colors may appear slightly softer than on gloss vinyl due to the paper stock\'s natural texture.' },
    { q: 'Can {product} be used on food packaging?', a: '{product} can be used on outer food packaging such as boxes and bags. They are not intended for direct food contact — confirm compliance for your application.' },
    { q: 'Are {product} moisture-resistant?', a: 'Standard paper {product} are not moisture-resistant. We offer a coated paper option with light moisture resistance — ideal for refrigerated product packaging.' },
    { q: 'What sizes are available for {product}?', a: '{product} are available in any custom size or shape. Common sizes for product labels range from 1"×1" to 4"×6" for most packaging applications.' },
    { q: 'Can {product} be die cut to a custom shape?', a: 'Yes. {product} can be cut to any custom shape using our computer-controlled die cutting equipment, regardless of the eco-material used.' },
    { q: 'What is the minimum order for {product}?', a: 'The minimum order for {product} is 50 units. For eco-conscious brands ordering in bulk, pricing improves significantly at 250 and 500+ units.' },
  ],
  finish: [
    { q: 'What is the difference between gloss and matte finish on {product}?', a: 'Gloss {product} have a shiny, reflective coating that makes colors vibrant and pop. Matte {product} have a soft, non-reflective finish that looks sophisticated and premium.' },
    { q: 'Which finish is best for outdoor use on {product}?', a: 'Both gloss and matte {product} include UV-resistant laminate for outdoor use. Gloss tends to show wear less than matte in high-touch outdoor applications.' },
    { q: 'Do {product} show fingerprints?', a: 'Gloss {product} can show fingerprints under certain lighting. Matte-finish {product} are more fingerprint-resistant due to their non-reflective surface texture.' },
    { q: 'Can I write on {product} with a pen or marker?', a: 'Matte {product} accept most permanent markers and ballpoint pens. Gloss {product} require a Sharpie or paint marker for legible, lasting writing.' },
    { q: 'Does the finish affect color reproduction on {product}?', a: 'Yes. Gloss {product} produce more saturated, vibrant colors. Matte {product} appear cooler and more subdued — both are excellent for different brand aesthetics.' },
    { q: 'Can {product} have a UV spot coating in addition to the base finish?', a: 'Yes. UV spot coating is available as an add-on that creates a high-gloss effect on selected design areas — great for logos and key brand elements.' },
    { q: 'Are {product} scratch-resistant?', a: 'Yes. All {product} include a protective laminate layer that resists light scratching and everyday handling. Heavy abrasion will eventually wear the surface.' },
    { q: 'Can I order a sample of {product} before placing a full order?', a: 'Yes. Sample packs for {product} are available for a nominal fee, credited toward your full order. This lets you evaluate the finish in person before committing.' },
    { q: 'How does the finish on {product} hold up in wet conditions?', a: 'Both gloss and matte {product} include waterproof laminate. The finish is unaffected by rain, moisture, and occasional splashing.' },
    { q: 'Can {product} be produced in both finishes within the same order?', a: 'Yes. Mixed-finish orders are available for {product}. Split your quantity between gloss and matte — specify the split in your order notes.' },
  ],
  size: [
    { q: 'What is the largest size available for {product}?', a: 'Our standard {product} go up to 12"×12". For larger format applications, we can produce them in sections — contact us with your exact dimensions.' },
    { q: 'Can I order {product} in multiple sizes in one order?', a: 'Yes. You can order different sizes of {product} in a single order. Each size is set up separately on the most cost-efficient print sheet.' },
    { q: 'What resolution do I need for artwork on large {product}?', a: 'For large {product}, submit files at 150 DPI at actual print size, or supply vector artwork which scales without any quality loss.' },
    { q: 'Can even small {product} be die cut to custom shapes?', a: 'Yes. Even at small sizes, {product} can be die cut to custom shapes — our minimum cuttable feature size is approximately 1mm.' },
    { q: 'How does the size affect the price of {product}?', a: 'Larger {product} use more material, so they cost more per unit. However, the cost-per-square-inch decreases as order quantity increases.' },
    { q: 'Can {product} be ordered in any custom size?', a: 'Yes. {product} are available in any dimensions. Specify your exact size requirements in the order form or include them in your quote request.' },
    { q: 'Are {product} suitable for outdoor use?', a: 'Vinyl {product} in any size are suitable for outdoor use. Larger {product} exposed to wind should use a stronger adhesive — mention your application when ordering.' },
    { q: 'What is the minimum size for {product}?', a: 'The minimum recommended size for {product} is 0.5"×0.5". Below this threshold, fine design details and small text may not be legible after printing.' },
    { q: 'What is the minimum order for {product}?', a: 'The minimum order for {product} is 50 units regardless of size. Large format {product} over 8"×8" have a higher per-unit base price.' },
    { q: 'Do you send a proof for {product} at the exact ordered size?', a: 'Yes. Your digital proof shows the {product} at the exact size you\'ve ordered, with cut lines and bleed guides, before any production begins.' },
  ],
  shape: [
    { q: 'Can {product} be ordered in a completely custom shape?', a: 'Yes. In addition to standard geometric shapes, {product} can be die cut to any custom outline you supply — logos, characters, or any unique form you design.' },
    { q: 'What standard shapes are available for {product}?', a: '{product} are available as squares, rectangles, circles, ovals, and custom die cut shapes. Square and rectangle are the most popular for labeling and branding.' },
    { q: 'How precise is the cutting for {product}?', a: 'We use computer-controlled die cutting equipment that follows your supplied cut path to within ±0.5mm, ensuring consistent shapes across your entire order.' },
    { q: 'Can {product} be ordered with rounded corners?', a: 'Yes. Rounded corners are a standard option for {product} — specify your preferred corner radius (typically 3–5mm) in your order notes.' },
    { q: 'What material are {product} available in?', a: '{product} are available in white vinyl, clear vinyl, holographic, metallic, paper, and eco-friendly stock. All shape options are available across every material.' },
    { q: 'Can I order mixed shapes of {product} in one order?', a: 'Yes. Multiple shapes can be included in one order. Each shape variant is cut from the same print run to optimize material use and reduce cost.' },
    { q: 'What is the minimum size for {product}?', a: 'The minimum recommended size for {product} is around 0.5"×0.5". This ensures design details and text remain legible after cutting.' },
    { q: 'Are {product} suitable for product labeling?', a: 'Yes. {product} are widely used for product labels, packaging seals, and branded closures. Permanent adhesive is recommended for permanent product labels.' },
    { q: 'What is the minimum order for {product}?', a: 'The minimum order for {product} is 50 units. For ongoing product labeling needs, standing order pricing is available to reduce your cost over time.' },
    { q: 'Do {product} include a bleed area in the design?', a: 'Yes. We add a standard 1/8" bleed to {product} artwork. Your digital proof shows the final cut line so you can verify the design before printing.' },
  ],
  security: [
    { q: 'How do {product} prevent tampering?', a: '{product} are engineered so any removal attempt results in a visible VOID pattern on the surface beneath, or the material fragments — making tampering immediately obvious.' },
    { q: 'Can {product} be customized with company branding?', a: 'Yes. {product} can be printed with your logo, serial numbers, or custom design. Branding reinforces product authenticity alongside the security features.' },
    { q: 'What surfaces do {product} adhere to?', a: '{product} adhere to most smooth surfaces including cardboard, plastic, glass, and metal. Always apply to a clean, dry surface for maximum security adhesion.' },
    { q: 'What happens when someone tries to remove {product}?', a: 'Depending on the type, {product} either leave a VOID message on the substrate, shatter into fragments, or leave permanent residue — all clear signs of tampering.' },
    { q: 'Are {product} available with holographic elements for added security?', a: 'Yes. We offer {product} with holographic overlays that add an additional authentication layer that is extremely difficult to replicate without specialized equipment.' },
    { q: 'Can {product} include barcodes or serial numbers?', a: 'Yes. {product} can be printed with unique serial numbers, barcodes, or QR codes per unit using variable data printing technology.' },
    { q: 'Are {product} waterproof?', a: '{product} are typically waterproof, but their security properties make them unsuitable for submerged applications. They\'re designed for standard product and packaging protection.' },
    { q: 'What is the minimum order for {product}?', a: 'The minimum order for {product} is 50 units. For high-security applications requiring variable serial numbers, minimum quantities may be higher — contact us.' },
    { q: 'How long do {product} last under normal conditions?', a: '{product} last indefinitely as long as they remain undisturbed. Their security properties activate only upon a removal attempt — they don\'t degrade over time.' },
    { q: 'Are {product} suitable for pharmaceutical or medical products?', a: '{product} are used in pharmaceutical packaging, but compliance requirements vary by jurisdiction. Consult your regulatory advisor before using {product} on medical products.' },
  ],
  packaging: [
    { q: 'Are {product} designed to stick to mylar and foil surfaces?', a: 'Yes. {product} use a high-tack adhesive formula engineered specifically for metallized surfaces like mylar, foil pouches, and metallic laminate packaging.' },
    { q: 'Will {product} stay on through shipping and handling?', a: 'Yes. {product} use a permanent high-tack adhesive that withstands the pressure, vibration, and temperature changes of standard shipping and warehouse handling.' },
    { q: 'Are {product} moisture-resistant?', a: 'Yes. {product} are made from a moisture-barrier film with waterproof adhesive — suitable for products stored in humid environments or sold alongside ice packs.' },
    { q: 'Can {product} be printed in full color?', a: '{product} are printed using high-resolution CMYK digital printing, supporting vibrant full-color designs including photos, logos, and detailed artwork.' },
    { q: 'Can {product} include barcodes or QR codes?', a: 'Yes. {product} can include barcodes, QR codes, and variable text. Ensure your barcode format meets retail or distribution requirements for your category.' },
    { q: 'What is the minimum order for {product}?', a: 'The minimum order for {product} is 50 units. For high-volume packaging operations, pricing improves significantly at 1,000 and 5,000+ units.' },
    { q: 'Are {product} food safe for cannabis or food packaging?', a: '{product} are not intended for direct food contact. For compliance, verify material specifications against your local food packaging and labeling regulations.' },
    { q: 'What sizes are available for {product}?', a: '{product} are available in any custom size from 1"×1" up to 8"×10" for large packaging labels. Custom die cutting is also available for any shape.' },
    { q: 'How do I prepare artwork for {product}?', a: 'Submit artwork at actual print size with a 1/8" bleed. Use vector files (AI, EPS, SVG) or 300 DPI raster files. Include a cut path for die cut versions.' },
    { q: 'Are {product} scratch-resistant?', a: 'Yes. {product} include a protective laminate that resists scratching from standard packaging and retail handling. The laminate option is strongly recommended for shelf-displayed products.' },
  ],
};

export function getCategoryFAQs(category: string, productName: string): FAQItem[] {
  const templates = categoryFAQTemplates[category] ?? categoryFAQTemplates['core'];
  return templates.map(({ q, a }) => ({
    q: q.replace(/\{product\}/g, productName),
    a: a.replace(/\{product\}/g, productName),
  }));
}
