const base = "/lapura";
const shampooV2 = `${base}/gallery-optimized/shampoo/v2`;
const conditionerV2 = `${base}/gallery-optimized/conditioner/v2`;

export const siteAssets = {
  shampooHero: `${shampooV2}/biofusion-restore-shampoo-texture-pour.webp`,
  shampooPack: `${shampooV2}/biofusion-restore-shampoo-front-250ml.webp`,
  shampooPour: `${shampooV2}/biofusion-restore-shampoo-dispensing.webp`,
  shampooGallery: [
    `${shampooV2}/biofusion-restore-shampoo-dispensing.webp`,
    `${shampooV2}/biofusion-restore-shampoo-texture-pour.webp`,
    `${shampooV2}/biofusion-restore-shampoo-back-label.webp`,
    `${shampooV2}/biofusion-restore-shampoo-key-ingredients-infographic.webp`,
    `${shampooV2}/biofusion-restore-shampoo-benefits-infographic.webp`,
    `${shampooV2}/biofusion-restore-shampoo-how-to-use-infographic.webp`,
  ],
  conditionerHero: `${conditionerV2}/biofusion-restore-conditioner-dispensing.webp`,
  conditionerPack: `${conditionerV2}/biofusion-restore-conditioner-front-250ml.webp`,
  conditionerPour: `${conditionerV2}/biofusion-restore-conditioner-dispensing.webp`,
  conditionerGallery: [
    `${conditionerV2}/biofusion-restore-conditioner-dispensing.webp`,
    `${conditionerV2}/biofusion-restore-conditioner-back-label.webp`,
    `${conditionerV2}/biofusion-restore-conditioner-key-ingredients-infographic.webp`,
    `${conditionerV2}/biofusion-restore-conditioner-benefits-infographic.webp`,
    `${conditionerV2}/biofusion-restore-conditioner-how-to-use-infographic.webp`,
  ],
  moringaSeedButter: `${base}/moringa-seed-butter-optimized.jpg`,
  baobabSeed: `${base}/baobab-seed-optimized.jpg`,
  wheatProtein: `${base}/wheat-protein.jpg`,
  soyProtein: `${base}/soy-protein-optimized.jpg`,
  cornProtein: `${base}/corn-protein-optimized.jpg`,
  stingingNettle: `${base}/stinging-nettle.jpg`,
  trehalose: `${base}/trehalose-optimized.jpg`,
  peptides: `${base}/peptides-optimized.jpg`,
  sodiumPca: `${base}/sodium-pca.jpg`,
} as const;
