
var story = {
    start: {
      text: "Welcome to the Enchanted Castle Quest! You are a brave knight on a mission to rescue a captured princess. You approach a fork in the road. Which path will you choose?",
      options: [
        { text: "Left", nextScene: "leftPath" },
        { text: "Right", nextScene: "rightPath" }
      ],
      explanation_text: "In programming, we use conditionals to make decisions, just like choosing a direction. Here, there are two choices: RIGHT or LEFT. Note how this is done with a if-else code block having two options: IF chosen right, it goes right, ELSE it goes left.",
      img_src: "If-else condition.png"
      
    },
    leftPath: {
      text: "You chose the left path. Suddenly, a mystical creature appears in your way. How do you react?",
      options: [
        { text: "Fight the creature", nextScene: "fightCreature" },
        { text: "Befriend the creature", nextScene: "befriendCreature" }
      ],
      explanation_text: "Now that you have chosen left, you still have two choices: FIGHT or BEFRIEND. Note how this is done by an if-else code block inside another if-else block.",
      img_src: "fight_or_befriend.png"
    },
    rightPath: {
      text: "You chose the right path. You come across a dark forest. What will you do?",
      options: [
        { text: "Enter the forest", nextScene: "enterForest" },
        { text: "Go around the forest", nextScene: "circumventForest" }
      ],
      explanation_text: "Now that you have chosen right, you still have two choices: ENTER or GO AROUND the forest. Note how this is done by an if-else code block inside another if-else block.",
      img_src: "Enter_or_Go Around.png"
    },
    fightCreature: {
      text: "You chose to fight the creature. With your bravery and skills, you defeat the creature and continue your quest.",
      options: [{ text: "Continue", nextScene: "rescuePrincess" }],
      explanation_text: "You have defeated the creature. You can continue with your quest. Notice the code-block CONTINUE below FIGHT.",
      img_src: "Continue_left.png"
    },
    befriendCreature: {
      text: "You decide to befriend the creature. It turns out to be a guardian of the castle and guides you to the princess.",
      options: [{ text: "Continue", nextScene: "rescuePrincess" }],
      explanation_text: "You have befriended the creature. You can continue with your quest. Notice the code-block CONTINUE below BEFRIEND.",
      img_src: "befriend_continue.png"
    },
    enterForest: {
      text: "You enter the dark forest. It is filled with traps and dangerous creatures. You lose your way and need to go back and choose another path.",
      options: [{ text: "Go back", nextScene: "start" }],
      explanation_text: "The game restarts here as we've reached a dead-end. Notice the code-block RESTART just below ENTER the forest.",
      img_src: "Enter the forest_RESTART.png"
    },
    circumventForest: {
      text: "You choose to go around the forest. Smart move! You avoid the dangers of the forest and reach the castle.",
      options: [{ text: "Continue", nextScene: "rescuePrincess" }],
      explanation_text: "In this case we contiue with our quest. Notice the code-block CONTINUE below GO AROUND the forest.",
      img_src: "Continue_RIGHT.png"
    },
    rescuePrincess: {
      text: "Congratulations! You rescue the princess and complete your noble quest. The kingdom is grateful for your bravery!",
      options: [{ text: "Play Again", nextScene: "start" }],
      explanation_text: "The game is complete. Please note the various diffenent ways this game could have been done and if-else blocks of all the possibilities.",
      img_src: "FINAL.png"
    }
  };
  
  function displayScene(scene) {
    var sceneText = document.getElementById("story");
    var sceneOptions = document.getElementById("options");
    var sceneExpText = document.getElementById("explantion-text");
    var sceneimg = document.getElementById("eximg");

    sceneimg.src = scene.img_src;
    
    sceneText.innerHTML = "";
    sceneOptions.innerHTML = "";
    sceneExpText.innerHTML = "";
    sceneimg.innerHTML = "";


    sceneimg.innerHTML = "<img src='"+ scene.img_src + "' alt='my image'>";
  
    sceneText.innerHTML = "<p>" + scene.text + "</p>";
    sceneExpText.innerHTML = "<p>" + scene.explanation_text + "</p>";

  
    for (var i = 0; i < scene.options.length; i++) {
      var option = scene.options[i];
      var button = document.createElement("button");
      button.innerHTML = option.text;
      button.onclick = (function (nextScene) {
        return function () {
          displayScene(story[nextScene]);
        };
      })(option.nextScene);
      sceneOptions.appendChild(button);
    }
  }
  
  displayScene(story.start);
  