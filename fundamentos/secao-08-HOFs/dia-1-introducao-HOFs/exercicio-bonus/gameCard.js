const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonDamage = () => Math.floor(Math.random() * (dragon.strength - 15) + 15);
  const warriorDamage = () => Math.floor(Math.random() * ( (warrior.strength * warrior.weaponDmg)- warrior.strength) + warrior.strength);
  const mageMana = () => {
      return {
          damage: Math.floor(Math.random() * ( (mage.intelligence * 2) - mage.intelligence) + mage.intelligence),
          mana: (mage.mana !== 'Não possui mana suficiente') ? (mage.mana <= 20 ? mage.mana = 'Não possui mana suficiente' : mage.mana -= 15) : mage.mana,
      }
  };

  const gameActions = {
    // Atualizar o damage do warrior
    //Simular luta entre warrior e dragao, dragon.healt = dragon.health - warrior.damage
    warrior: (action) => {
       const damage = action();
       warrior.damage = damage;
       dragon.healthPoints = dragon.healthPoints - warrior.damage;
    },
    mage: (action) => {
        const damageAndMana = action();
        Object.assign(mage, damageAndMana);
        dragon.healthPoints = dragon.healthPoints - mage.damage;
    },
    dragon: (action) => {
        const damage = action();
       dragon.damage = damage;
       warrior.healthPoints = warrior.healthPoints - dragon.damage;
       mage.healthPoints = mage.healthPoints - dragon.damage;
    },
    battle: () => {
        return Object.entries(battleMembers);
    },
  };

gameActions.warrior(warriorDamage);
gameActions.mage(mageMana);
gameActions.dragon(dragonDamage);

console.log(gameActions.battle());