/**
 * Islander Studio - 3D & Relief Effects (Three.js Sea Turtle & 3D Tilt)
 */

document.addEventListener("DOMContentLoaded", () => {
  initThreeD();
  initTiltEffects();
});

// --- 1. SCÈNE 3D DE LA TORTUE (Three.js) ---
function initThreeD() {
  const container = document.getElementById("hero-3d-container");
  if (!container) return;

  // Vérifier si Three.js est bien chargé
  if (typeof THREE === "undefined") {
    console.warn("Three.js n'a pas pu être chargé.");
    return;
  }

  // Configuration de base de la scène
  const scene = new THREE.Scene();

  // Caméra
  const camera = new THREE.PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    0.1,
    100
  );
  camera.position.set(0, 1.8, 6);

  // Rendu avec fond transparent (alpha) et anticrénelage (antialias)
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  container.appendChild(renderer.domElement);

  // --- CRÉATION DE LA TORTUE EN 3D (STYLE LOW-POLY) ---
  const turtleGroup = new THREE.Group();
  scene.add(turtleGroup);

  // Matériaux
  const shellMaterial = new THREE.MeshStandardMaterial({
    color: 0x4d8f8b, // Vert lagon
    roughness: 0.15,
    metalness: 0.1,
    flatShading: true,
  });

  const skinMaterial = new THREE.MeshStandardMaterial({
    color: 0x9fb0ab, // Gris-vert eau doux
    roughness: 0.65,
    flatShading: true,
  });

  const bellyMaterial = new THREE.MeshStandardMaterial({
    color: 0xf4f0e8, // Couleur sable / crème de la marque
    roughness: 0.4,
    flatShading: true,
  });

  const eyeMaterial = new THREE.MeshBasicMaterial({
    color: 0x101010, // Noir encre
  });

  // 1. La carapace (Shell) - Sphère écrasée et étirée
  const shellGeo = new THREE.SphereGeometry(1.4, 8, 6);
  const shell = new THREE.Mesh(shellGeo, shellMaterial);
  shell.scale.set(1.2, 0.45, 1.65);
  turtleGroup.add(shell);

  // 2. Le plastron (Belly / Dessous) - Plus plat et de couleur sable
  const bellyGeo = new THREE.SphereGeometry(1.3, 8, 4);
  const belly = new THREE.Mesh(bellyGeo, bellyMaterial);
  belly.scale.set(1.15, 0.1, 1.55);
  belly.position.y = -0.25;
  turtleGroup.add(belly);

  // 3. La tête
  const headGeo = new THREE.SphereGeometry(0.48, 6, 5);
  const head = new THREE.Mesh(headGeo, skinMaterial);
  head.position.set(0, 0.05, 1.9);
  head.scale.set(1, 0.8, 1.25);
  turtleGroup.add(head);

  // Yeux
  const eyeGeo = new THREE.SphereGeometry(0.07, 4, 4);
  const leftEye = new THREE.Mesh(eyeGeo, eyeMaterial);
  leftEye.position.set(0.33, 0.14, 2.22);
  const rightEye = leftEye.clone();
  rightEye.position.x = -0.33;
  turtleGroup.add(leftEye);
  turtleGroup.add(rightEye);

  // 4. Les Nageoires (Flippers)
  // Géométries
  const frontFlipperGeo = new THREE.BoxGeometry(1.7, 0.05, 0.55);
  const rearFlipperGeo = new THREE.BoxGeometry(0.75, 0.04, 0.42);

  // Pivots pour pouvoir animer les nageoires de manière anatomique
  // Nageoire Avant Gauche
  const leftFrontPivot = new THREE.Group();
  leftFrontPivot.position.set(1.1, -0.1, 0.7);
  const leftFrontFlipper = new THREE.Mesh(frontFlipperGeo, skinMaterial);
  leftFrontFlipper.position.set(0.85, 0, -0.1);
  leftFrontFlipper.rotation.y = -Math.PI / 5; // Orientée vers l'arrière
  leftFrontPivot.add(leftFrontFlipper);
  turtleGroup.add(leftFrontPivot);

  // Nageoire Avant Droite
  const rightFrontPivot = new THREE.Group();
  rightFrontPivot.position.set(-1.1, -0.1, 0.7);
  const rightFrontFlipper = new THREE.Mesh(frontFlipperGeo, skinMaterial);
  rightFrontFlipper.position.set(-0.85, 0, -0.1);
  rightFrontFlipper.rotation.y = Math.PI / 5; // Orientée vers l'arrière
  rightFrontPivot.add(rightFrontFlipper);
  turtleGroup.add(rightFrontPivot);

  // Nageoire Arrière Gauche
  const leftRearPivot = new THREE.Group();
  leftRearPivot.position.set(0.75, -0.1, -1.1);
  const leftRearFlipper = new THREE.Mesh(rearFlipperGeo, skinMaterial);
  leftRearFlipper.position.set(0.35, 0, -0.08);
  leftRearFlipper.rotation.y = -Math.PI / 4;
  leftRearPivot.add(leftRearFlipper);
  turtleGroup.add(leftRearPivot);

  // Nageoire Arrière Droite
  const rightRearPivot = new THREE.Group();
  rightRearPivot.position.set(-0.75, -0.1, -1.1);
  const rightRearFlipper = new THREE.Mesh(rearFlipperGeo, skinMaterial);
  rightRearFlipper.position.set(-0.35, 0, -0.08);
  rightRearFlipper.rotation.y = Math.PI / 4;
  rightRearPivot.add(rightRearFlipper);
  turtleGroup.add(rightRearPivot);

  // 5. La Queue (Tail)
  const tailGeo = new THREE.ConeGeometry(0.2, 0.75, 4);
  const tail = new THREE.Mesh(tailGeo, skinMaterial);
  tail.position.set(0, -0.12, -1.7);
  tail.rotation.x = -Math.PI / 2.1;
  turtleGroup.add(tail);

  // Configuration initiale de la tortue
  turtleGroup.scale.set(0.85, 0.85, 0.85);
  turtleGroup.position.set(0, 0, 0);
  turtleGroup.rotation.set(-0.2, -0.4, 0); // Légère inclinaison initiale esthétique

  // --- LUMIÈRES ---
  // Lumière ambiante pour déboucher les ombres
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
  scene.add(ambientLight);

  // Lumière directionnelle (le soleil chaud)
  const dirLight = new THREE.DirectionalLight(0xfffaed, 0.95);
  dirLight.position.set(6, 10, 4);
  scene.add(dirLight);

  // Lumière ponctuelle sous-marine (le reflet du lagon turquoise)
  const lagoonLight = new THREE.PointLight(0x4d8f8b, 1.5, 15);
  lagoonLight.position.set(-2, -5, 1);
  scene.add(lagoonLight);

  // Deuxième lumière pour rehausser le relief (corail)
  const coralLight = new THREE.DirectionalLight(0xd95c46, 0.35);
  coralLight.position.set(-6, -3, -2);
  scene.add(coralLight);

  // --- VARIABLES D'INTERACTION ---
  let mouseX = 0;
  let mouseY = 0;
  let targetRotX = -0.2;
  let targetRotY = -0.4;
  let targetZ = 0;
  let targetYOffset = 0;

  // Suivi de la souris
  window.addEventListener("mousemove", (e) => {
    // Coordonnées normalisées (-1 à 1)
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  // Horloge pour l'animation
  const clock = new THREE.Clock();

  // --- BOUCLE D'ANIMATION ---
  function animate() {
    requestAnimationFrame(animate);

    const time = clock.getElapsedTime();

    // 1. Mouvement de nage sinusoïdal (battements de nageoires)
    const swimSpeed = 2.4;
    const wave = Math.sin(time * swimSpeed);
    const rearWave = Math.sin(time * swimSpeed - Math.PI / 2);

    // Flaps verticaux
    leftFrontPivot.rotation.z = wave * 0.22;
    rightFrontPivot.rotation.z = -wave * 0.22;
    
    leftRearPivot.rotation.z = rearWave * 0.12;
    rightRearPivot.rotation.z = -rearWave * 0.12;

    // Légère rotation horizontale accompagnant le mouvement
    leftFrontPivot.rotation.y = -Math.PI / 5 + wave * 0.08;
    rightFrontPivot.rotation.y = Math.PI / 5 - wave * 0.08;

    // 2. Flottaison naturelle (Bobbing & rotations passives)
    const bobbing = Math.sin(time * 1.2) * 0.12;
    const passiveRoll = Math.sin(time * 0.6) * 0.04;
    const passivePitch = Math.cos(time * 0.6) * 0.04;

    // 3. Calcul des cibles d'interaction (Souris + Défilement)
    // Réaction au scroll
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;

    // Plus l'utilisateur descend, plus la tortue plonge et descend
    targetZ = -scrollPercent * 3.8;
    targetYOffset = -scrollPercent * 2.2;
    const scrollPitch = -scrollPercent * 0.55; // Piquer du nez vers le bas

    // Réaction à la souris (seulement si le scroll n'est pas trop grand pour garder le contrôle)
    targetRotY = mouseX * 0.55 - 0.4;
    targetRotX = -mouseY * 0.35 - 0.15 + scrollPitch;

    // Lissage (Lerp) pour des mouvements ultra fluides
    turtleGroup.rotation.y += (targetRotY - turtleGroup.rotation.y) * 0.055;
    turtleGroup.rotation.x += (targetRotX + passivePitch - turtleGroup.rotation.x) * 0.055;
    turtleGroup.rotation.z += (passiveRoll - turtleGroup.rotation.z) * 0.055;

    turtleGroup.position.y += (bobbing + targetYOffset - turtleGroup.position.y) * 0.055;
    turtleGroup.position.z += (targetZ - turtleGroup.position.z) * 0.055;

    // Rendu
    renderer.render(scene, camera);
  }

  animate();

  // --- REDIMENSIONNEMENT ---
  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
}

// --- 2. EFFETS TILT 3D INTERACTIFS ---
function initTiltEffects() {
  // Sélecteur des éléments qui auront l'effet Tilt
  // - Les cartes produits (.product-card)
  // - Le panneau de marque d'à propos (.identity-board)
  const tiltSelector = ".product-card, .identity-board";

  // Gestion du survol via délégation d'événements pour le dynamisme
  document.addEventListener("mousemove", (event) => {
    const card = event.target.closest(tiltSelector);
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left; // position X relative
    const y = event.clientY - rect.top;  // position Y relative

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Pourcentage de décalage par rapport au centre (-1 à 1)
    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    // Degrés de rotation max
    const maxRot = 12;
    const rotX = -percentY * maxRot;
    const rotY = percentX * maxRot;

    // Appliquer la transformation 3D sur le parent
    if (card.classList.contains("product-card")) {
      card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-5px) scale(1.015)`;
      card.style.boxShadow = `
        ${-percentX * 12}px ${-percentY * 12 + 18}px 40px rgba(16, 16, 16, 0.18),
        0 4px 10px rgba(16, 16, 16, 0.04)
      `;

      // Parallaxe sur l'image / icône interne (SVG ou IMG)
      const media = card.querySelector(".product-art svg, .product-art img");
      if (media) {
        media.style.transform = `translate3d(${(percentX * 16).toFixed(1)}px, ${(percentY * 16).toFixed(1)}px, 30px) rotate(${(-percentX * 2.5).toFixed(1)}deg)`;
      }
    } else if (card.classList.contains("identity-board")) {
      card.style.transform = `perspective(1200px) rotateX(${(rotX * 0.7).toFixed(2)}deg) rotateY(${(rotY * 0.7).toFixed(2)}deg) scale(1.01)`;
      
      // Parallaxe sur le monogramme et le mot de marque (Wordmark)
      const monogram = card.querySelector(".monogram");
      const wordmark = card.querySelector(".wordmark");
      const palette = card.querySelector(".palette");

      if (monogram) {
        monogram.style.transform = `translate3d(${(percentX * 24).toFixed(1)}px, ${(percentY * 24).toFixed(1)}px, 45px)`;
      }
      if (wordmark) {
        wordmark.style.transform = `translate3d(${(percentX * 14).toFixed(1)}px, ${(percentY * 14).toFixed(1)}px, 25px)`;
      }
      if (palette) {
        palette.style.transform = `translate3d(${(percentX * 8).toFixed(1)}px, ${(percentY * 8).toFixed(1)}px, 15px)`;
      }
    }
  });

  // Réinitialisation lors de la sortie de la carte
  document.addEventListener("mouseout", (event) => {
    const card = event.target.closest(tiltSelector);
    if (!card) return;

    // Si on quitte vraiment l'élément (pas juste en passant sur un enfant)
    const related = event.relatedTarget;
    if (related && card.contains(related)) return;

    // Reset styles
    card.style.transform = "";
    card.style.boxShadow = "";

    if (card.classList.contains("product-card")) {
      const media = card.querySelector(".product-art svg, .product-art img");
      if (media) media.style.transform = "";
    } else if (card.classList.contains("identity-board")) {
      const monogram = card.querySelector(".monogram");
      const wordmark = card.querySelector(".wordmark");
      const palette = card.querySelector(".palette");

      if (monogram) monogram.style.transform = "";
      if (wordmark) wordmark.style.transform = "";
      if (palette) palette.style.transform = "";
    }
  });
}
