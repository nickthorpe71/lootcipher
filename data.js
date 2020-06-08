export default {
  collection: {
    Sculpture: {                 //sculpture
      subCategories: [
        'Statue',
        'Figurine'
      ],
      materials: {
        1: ['Wood', 'Clay'],
        2: ['Wax'],
        3: ['Stone'],
        4: ['Bronze'],
        5: ['Glass'],
        6: ['Marble'],
        7: ['Silver'],
        8: ['Jade'],
        9: ['Gold'],
        10: ['Gold']
      },
      conditions: {
        1: ['Crumbling'],
        2: ['Cracked'],
        3: ['Chipped'],
        4: ['Good'],
        5: ['Good'],
        6: ['Good'],
        7: ['Flawless'],
        8: ['Flawless'],
        9: ['Perfect'],
        10: ['Perfect']
      },
      enchantments: {
        1: ['Strange', 'Weird', 'Foul', 'Normal', 'Plain'],
        2: ['Sacred', 'Glowing'],
        3: ['Unearthly', 'Haunted'],
        4: ['Lucky'],
        5: ['Haunted'],
        6: ['Shadow', 'Shaman\'s'],
        7: ['Fiery', 'Hexed', 'Cursed'],
        8: ['Shimmering'],
        9: ['Hallowed'],
        10: ['Divine']

      },
      makers: {
        1: ['Unknown'],
        2: ['Diana Al-Hadid'],
        3: ['Walter S. Arnold'],
        4: ['Jacob Epstein'],
        5: ['Eva Hesse'],
        6: ['Teresa Feoderovna Ries'],
        7: ['Louise Bourgeois'],
        8: ['Sol LeWitt'],
        9: ['Constantin Brancusi'],
        10: ['Michelangelo']
      }
    },
    Armor: {                //armor
      subCategories: [
        'Buckler',
        'Small Shield',
        'Kite Shield',
        'Tower Shield',
        'Luna',
        'Breast Plate',
        'Chain Mail',
        'Full Plate',
        'Plate Mail',
        'Skull Cap',
        'Crown',
        'Casque',
        'Basinet',
        'Winged Helm',
        'Gloves',
        'Chain Mail Gloves',
        'Plate Gauntlets',
        'Chain Boots',
        'Greaves',
        'Plate Boots',
        'Plate Belt',
        'Chain Belt'
      ],
      materials: {
        1: ['Iron'],
        2: ['Bronze'],
        3: ['Steel'],
        4: ['Steel'],
        5: ['Silver'],
        6: ['Silver'],
        7: ['Jade'],
        8: ['Jade'],
        9: ['Gold'],
        10: ['Meteoric']
      },
      conditions: {
        1: ['Broken', 'Rusty'],
        2: ['Cracked', 'Damaged'],
        3: ['Chipped', 'Scratched'],
        4: ['Good'],
        5: ['Good'],
        6: ['Good'],
        7: ['Flawless'],
        8: ['Flawless'],
        9: ['Perfect'],
        10: ['Perfect']
      },
      enchantments: {
        1: ['Strange', 'Weird', 'Normal', 'Plain'],
        2: ['Sacred', 'Glowing', 'Sturdy'],
        3: ['Unearthly', 'Haunted', 'Fine'],
        4: ['Lucky', 'Argent'],
        5: ['Haunted', 'Arcadian'],
        6: ['Shadow', 'Shaman\'s', 'Knight\'s', 'Samurai'],
        7: ['Fiery', 'Hexed', 'Cursed'],
        8: ['Shimmering'],
        9: ['Hallowed'],
        10: ['Divine']
      },
      makers: {
        1: ['Unknown'],
        2: ['Unknown'],
        3: ['Unknown'],
        4: ['Samuel Yellin'],
        5: ['Jan Liwacz'],
        6: ['Jan Liwacz'],
        7: ['Simeon Wheelock'],
        8: ['Simeon Wheelock'],
        9: ['Lorenz Helmschmied'],
        10: ['Lorenz Helmschmied']
      }
    },                //weapon
    Weapon: {
      subCategories: [
        'Hatchet',
        'Tomahawk',
        'Broad Axe',
        'Battle Axe',
        'Scimitar',
        'Cutlass',
        'Katana',
        'Rapier',
        'Dirk',
        'Jambiya',
        'Kris',
        'Corvo',
        'Flail',
        'Morning Star',
        'Warhammer',
        'Maul',
        'Longbow',
        'Flatbow',
        'Katar',
        'Gladius',
        'Broadsword',
        'Longsword',
        'Zweihänder',
        'Claymore',
        'Great sword',
        'Recurve bow',
        'Composite bow',
        'Cestus',
        'Spear',
        'Javelin'
      ],
      materials: {
        1: ['Iron'],
        2: ['Bronze'],
        3: ['Steel'],
        4: ['Steel'],
        5: ['Silver'],
        6: ['Silver'],
        7: ['Jade'],
        8: ['Jade'],
        9: ['Gold'],
        10: ['Meteoric']
      },
      conditions: {
        1: ['Broken', 'Rusty'],
        2: ['Cracked', 'Damaged'],
        3: ['Chipped', 'Scratched'],
        4: ['Good'],
        5: ['Good'],
        6: ['Good'],
        7: ['Flawless'],
        8: ['Flawless'],
        9: ['Perfect'],
        10: ['Perfect']
      },
      enchantments: {
        1: ['Strange', 'Weird', 'Normal', 'Plain'],
        2: ['Sacred', 'Glowing', 'Sturdy', 'Sharp'],
        3: ['Unearthly', 'Haunted', 'Fine'],
        4: ['Lucky', 'Argent'],
        5: ['Haunted', 'Arcadian'],
        6: ['Shadow', 'Shaman\'s', 'Knight\'s', 'Samurai'],
        7: ['Fiery', 'Hexed', 'Cursed'],
        8: ['Shimmering'],
        9: ['Hallowed'],
        10: ['Divine']
      },
      makers: {
        1: ['Unknown'],
        2: ['Tom Joyce'],
        3: ['Thomas Davenport'],
        4: ['Samuel Yellin'],
        5: ['Tubal-cain'],
        6: ['Simeon Wheelock'],
        7: ['Seppo Ilmarinen'],
        8: ['Wayland'],
        9: ['Masamune'],
        10: ['Hephaestus']
      }
    },
    Jewelry: {
      subCategories: [
        'Earrings',
        'Hairpin',
        'Necklace',
        'Pendant',
        'Armlet',
        'Bangle',
        'Bracelet',
        'Ring',
        'Amulet'
      ],
      materials: {
        1: ['Iron'],
        2: ['Bronze'],
        3: ['Steel'],
        4: ['Steel'],
        5: ['Silver'],
        6: ['Silver'],
        7: ['Saphire', 'Topaz', 'Ruby', 'Amber', 'Emerald', 'Aquamarine', 'Opal',],
        8: ['Jade', 'Moonstone'],
        9: ['Gold'],
        10: ['Diamond', 'Alexandrite']
      },
      conditions: {
        1: ['Broken', 'Rusty'],
        2: ['Cracked', 'Damaged'],
        3: ['Chipped', 'Scratched'],
        4: ['Good'],
        5: ['Good'],
        6: ['Good'],
        7: ['Flawless'],
        8: ['Flawless'],
        9: ['Perfect'],
        10: ['Perfect']
      },
      enchantments: {
        1: ['Strange', 'Weird', 'Normal', 'Plain'],
        2: ['Sacred', 'Glowing', 'Sturdy'],
        3: ['Unearthly', 'Haunted', 'Fine'],
        4: ['Lucky', 'Argent'],
        5: ['Haunted', 'Arcadian'],
        6: ['Shadow', 'Shaman\'s', 'Knight\'s', 'Samurai'],
        7: ['Fiery', 'Hexed', 'Cursed'],
        8: ['Shimmering'],
        9: ['Hallowed'],
        10: ['Divine']
      },
      makers: {
        1: ['Unknown'],
        2: ['Suzanne Belperron'],
        3: ['Frederic Boucheron'],
        4: ['Elijah Peacock'],
        5: ['Tubal-cain'],
        6: ['Simeon Wheelock'],
        7: ['Jean Cocteau'],
        8: ['Gustav Fabergé'],
        9: ['William Spratling'],
        10: ['Kokichi Mikimoto']
      }
    },
    Painting: {
      subCategories: [
        'Painting'
      ],
      materials: {
        1: [''],
        2: [''],
        3: [''],
        4: [''],
        5: [''],
        6: [''],
        7: [''],
        8: [''],
        9: [''],
        10: ['']
      },
      conditions: {
        1: ['Rotting'],
        2: ['Tattered'],
        3: ['Scratched', 'Damaged'],
        4: ['Good'],
        5: ['Good'],
        6: ['Good'],
        7: ['Flawless'],
        8: ['Flawless'],
        9: ['Perfect'],
        10: ['Perfect']
      },
      enchantments: {
        1: ['Strange', 'Weird', 'Foul', 'Normal', 'Plain'],
        2: ['Sacred', 'Glowing'],
        3: ['Unearthly', 'Haunted'],
        4: ['Lucky'],
        5: ['Haunted'],
        6: ['Shadow', 'Shaman\'s'],
        7: ['Fiery', 'Hexed', 'Cursed'],
        8: ['Shimmering'],
        9: ['Hallowed'],
        10: ['Divine']
      },
      makers: {
        1: ['Unknown'],
        2: ['Benozzo Gozzoli', 'Cosimo Tura', 'Andrea Mantegna'],
        3: ['Fra Angelico', 'Francesco Cossa'],
        4: ['Masaccio', 'Luca Signorelli'],
        5: ['Kazimir Malevich'],
        6: ['Alberto Durero'],
        7: ['Artemisia Gentileschi'],
        8: ['Claude Monet', 'Francisco Goya'],
        9: ['Pablo Picasso', 'Vincent van Gogh'],
        10: ['Leonardo da Vinci', 'Michelangelo']
      }
    },
    Gem: {
      subCategories: [
        ''
      ],
      materials: {
        1: ['Saphire', 'Topaz', 'Ruby', 'Amber', 'Emerald', 'Aquamarine', 'Opal', 'Amethyst'],
        2: ['Saphire', 'Topaz', 'Ruby', 'Amber', 'Emerald', 'Aquamarine', 'Opal', 'Amethyst'],
        3: ['Saphire', 'Topaz', 'Ruby', 'Amber', 'Emerald', 'Aquamarine', 'Opal', 'Amethyst'],
        4: ['Saphire', 'Topaz', 'Ruby', 'Amber', 'Emerald', 'Aquamarine', 'Opal', 'Amethyst'],
        5: ['Alexandrite', 'Moonstone', 'Jade'],
        6: ['Alexandrite', 'Moonstone', 'Jade'],
        7: ['Alexandrite', 'Moonstone', 'Jade'],
        8: ['Alexandrite', 'Moonstone', 'Jade'],
        9: ['Diamond'],
        10: ['Diamond']
      },
      conditions: {
        1: ['Chipped'],
        2: ['Flawed'],
        3: ['Flawed'],
        4: ['Good'],
        5: ['Good'],
        6: ['Good'],
        7: ['Flawless'],
        8: ['Flawless'],
        9: ['Perfect'],
        10: ['Perfect']
      },
      enchantments: {
        1: ['Strange', 'Weird', 'Foul', 'Normal', 'Plain'],
        2: ['Sacred', 'Glowing'],
        3: ['Unearthly', 'Haunted'],
        4: ['Lucky'],
        5: ['Haunted'],
        6: ['Shadow', 'Pure'],
        7: ['Fiery', 'Hexed', 'Cursed'],
        8: ['Shimmering'],
        9: ['Hallowed'],
        10: ['Divine']
      },
      makers: {
        1: [''],
        2: [''],
        3: [''],
        4: [''],
        5: [''],
        6: [''],
        7: [''],
        8: [''],
        9: [''],
        10: ['']
      }
    },
    Wine: {
      subCategories: [
        'Syrah', 'Merlot', 'Cabernet sauvignon', 'Malbec', 'Pinot noir', 'Zinfandel', 'Sangiovese', 'Barbera'
      ],
      materials: {
        1: [''],
        2: [''],
        3: [''],
        4: [''],
        5: [''],
        6: [''],
        7: [''],
        8: [''],
        9: [''],
        10: ['']
      },
      conditions: {
        1: ['Empty'],
        2: ['Rotten'],
        3: ['Good'],
        4: ['Good'],
        5: ['Good'],
        6: ['Good'],
        7: ['Flawless'],
        8: ['Flawless'],
        9: ['Perfect'],
        10: ['Perfect']
      },
      enchantments: {
        1: ['Strange', 'Weird', 'Foul', 'Normal', 'Plain'],
        2: ['Sacred', 'Glowing'],
        3: ['Unearthly', 'Haunted'],
        4: ['Lucky'],
        5: ['Haunted'],
        6: ['Shadow', 'Pure'],
        7: ['Fiery', 'Hexed', 'Cursed'],
        8: ['Shimmering'],
        9: ['Hallowed'],
        10: ['Divine']
      },
      makers: {
        1: ['Unknown'],
        2: ['Chateau Montelena, California', 'Yarra Yering, Yarra Valley, Australia', 'Lavaux vineyards, Switzerland'],
        3: ['Marques de Riscal, Spain', 'Chard Farm Winery, New Zealand'],
        4: ['Holden Manz Winery, South Africa', 'Chateau Ducru Beaucaillou, France', 'Mission Hill Winery, Canada'],
        5: ['Eric Arnold', 'Alberto Antonini', 'John Adlum'],
        6: ['Franco Biondi Santi', 'Jacques Berthomeau', 'Heidi Peterson Barrett'],
        7: ['Casa Madero, Parras de la Fuente, Mexico – established 1568'],
        8: ['Casa Madero, Parras de la Fuente, Mexico – established 1568', 'Rustenberg, Stellenbosch, South Africa – established 1682', 'Boschendal Winery, Franschhoek, South Africa – established 1688'],
        9: ['Barone Ricasoli, Tuscany, Italy – established 1141', 'Schloss Vollrads, Rheingau, Germany – established 1211'],
        10: ['Schloss Johanisberg, Germany – circa 1100']
      }
    },
  }
};