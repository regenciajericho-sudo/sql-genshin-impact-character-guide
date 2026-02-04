const characters = [
    {
        name: "Zhongli",
        element: "Geo",
        rarity: 5,
        weapon: "Polearm",
        build: "4-piece Archaic Petra",
        image: "https://static.wikia.nocookie.net/genshin-impact/images/8/8a/Personagem_Zhongli_Cart%C3%A3o.png/revision/latest?cb=20210405013746&path-prefix=pt-br"
    },
    {
        name: "Zibai",
        element: "Geo",
        rarity: 5,
        weapon: "Sword",
        build: "4-piece Night of the sky's Unveiling",
        image: "https://static.gosugamers.net/af/65/bf/5c85c4ed197d308a94f496f687a57b725874884e5974dfe8f12a3d0a14.webp?w=1600"
    },
    {
        name: "Xilonen",
        element: "Geo",
        rarity: 5,
        weapon: "Sword",
        build: "4-piece Scroll of the hero of Cinder City",
        image: "https://i.pinimg.com/736x/ec/26/49/ec26497595689807871d10cf91f988d6.jpg"
    },
    {
        name: "Chiori",
        element: "Geo",
        rarity: 5,
        weapon: "Sword",
        build: "4-piece Golden Troupe",
        image: "https://upload-os-bbs.hoyolab.com/upload/2024/01/29/186231369/b2ac610c6e96edd917939240f997ab22_3856040128168012771.jpg"
    },
    {
        name: "Albedo",
        element: "Geo",
        rarity: 5,
        weapon: "Sword",
        build: "4-piece Husk of Opulent Dreams",
        image: "https://static.wikia.nocookie.net/gensin-impact/images/0/01/Albedo_Card.png/revision/latest?cb=20240808210932"
    },
    {
        name: "Navia",
        element: "Geo",
        rarity: 5,
        weapon: "Claymore",
        build: "4-piece Nighttime Whispers",
        image: "https://tse1.mm.bing.net/th/id/OIP.XnPeFyWNVwB9S7cY1nqJpQHaPo?cb=defcache2defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    
    {
        name: "Itto",
        element: "Geo",
        rarity: 5,
        weapon: "Claymore",
        build: "4-piece Husk of Opulent Dreams",
        image: "https://staticg.sportskeeda.com/editor/2021/12/3d68a-16389368210320-1920.jpg"
    },
    {
        name: "Traveler(Geo)",
        element: "Geo",
        rarity: 5,
        weapon: "Sword",
        build: "4-piece Nighttime Whispers",
        image: "https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/07/04/Genshin-Impact-Hydro-Traveler-abilities.jpg"
    },
    {
        name: "Illuga",
        element: "Geo",
        rarity: 4,
        weapon: "Polearm",
        build: "4-piece Silken Moon's Serenade",
        image: "https://static.beebom.com/wp-content/uploads/2025/12/Illuga-Genshin-Impact.jpg"
    },
    {
        name: "Kachina",
        element: "Geo",
        rarity: 4,
        weapon: "Polearm",
        build: "4-piece Scroll of the hero of Cinder City",
        image: "https://www.dexerto.com/cdn-image/wp-content/uploads/2024/07/18/Kachina-in-Genshin-Impact-Leaks-and-everything-we-know.jpg?width=3840&quality=60&format=auto"
    },
    {
        name: "Yun Jin",
        element: "Geo",
        rarity: 4,
        weapon: "Polearm",
        build: "4-piece Husk of Opulent Dreams",
        image: "https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Yun_Jin_Card.png/revision/latest?cb=20220725205249"
    },
    {
        name: "Gorou",
        element: "Geo",
        rarity: 4,
        weapon: "Bow",
        build: "4-piece Husk of Opulent Dreams",
        image: "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2021/10/genshin-impact-gorou-build-best-2.jpg"
    },
    {
        name: "Noelle",
        element: "Geo",
        rarity: 4,
        weapon: "Claymore",
        build: "4-piece Husk of Opulent Dreams",
        image: "https://static.wikia.nocookie.net/gensin-impact/images/e/eb/Noelle_Card.png/revision/latest?cb=20220725205118"
    },
    {
        name: "Ningguang",
        element: "Geo",
        rarity: 4,
        weapon: "Catalyst",
        build: "4-piece Nighttime Whispers",
        image: "https://static.wikia.nocookie.net/gensin-impact/images/a/a8/Ningguang_Card.png/revision/latest?cb=20220725205113"
    }
    // add more characters here
];



const charactersList = document.getElementById("character-list");

characters.forEach(char => {
    const card = document.createElement("div");
    card.classList.add("character-card");

    card.innerHTML = `
    <img src="${char.image}" alt="${char.name}" class="character-img">
    <h2>${char.name}</h2>
    <p>Element: ${char.element}</p>
    <p>Rarity: ${"★".repeat(char.rarity)}</p>
    <p>Weapon: ${char.weapon}</p>
    <p>Build: ${char.build}</p>
    `;

    charactersList.appendChild(card)
})