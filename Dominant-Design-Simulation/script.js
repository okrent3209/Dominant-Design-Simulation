// Simulation Data
const stages = {
  start: {
    text: "Welcome to the Dominant Design Simulation! Choose an industry to begin exploring the journey of innovation.",
    choices: [
      { text: "Automotive", nextStage: "automotive_pre" },
      { text: "Smartphones", nextStage: "smartphones_pre" },
      { text: "Home Appliances", nextStage: "appliances_pre" },
      { text: "Personal Computing", nextStage: "computing_pre" }
    ]
  },
  // Automotive Industry
  automotive_pre: {
    text: "In the early 20th century, the automotive industry was full of competing designs. Steam, electric, and gasoline-powered cars all vied for dominance. Which design do you think will succeed?",
    choices: [
      { text: "Gasoline", nextStage: "automotive_dominant" },
      { text: "Electric", nextStage: "automotive_dominant_fail" }
    ]
  },
  automotive_dominant: {
    text: "The gasoline-powered Ford Model T becomes the dominant design due to mass production and affordability. What innovation will you focus on next?",
    choices: [
      { text: "Safety improvements (e.g., anti-lock brakes)", nextStage: "automotive_post" },
      { text: "Fuel efficiency", nextStage: "automotive_post" }
    ]
  },
  automotive_dominant_fail: {
    text: "Electric cars failed to gain traction in the early 20th century due to limited battery technology. Gasoline cars become dominant. What next?",
    choices: [
      { text: "Adopt gasoline innovations", nextStage: "automotive_dominant" }
    ]
  },
  automotive_post: {
    text: "Post-dominant design: The focus shifts to incremental innovations like safety and fuel efficiency. What's next?",
    choices: [
      { text: "Focus on electric cars as disruptive innovation", nextStage: "automotive_disrupt" },
      { text: "Keep improving gasoline cars", nextStage: "automotive_complement" }
    ]
  },
  automotive_disrupt: {
    text: "Electric vehicles like Tesla challenge the dominance of gasoline cars. The future of innovation shifts toward sustainable energy.",
    choices: [
      { text: "End simulation", nextStage: "end" }
    ]
  },
  automotive_complement: {
    text: "Gasoline cars continue to improve through complementary innovations such as better fuel infrastructure and gas stations.",
    choices: [
      { text: "End simulation", nextStage: "end" }
    ]
  },

  // Smartphones Industry
  smartphones_pre: {
    text: "Early smartphones were diverse in design. Some had keyboards (BlackBerry), some were PDAs (Palm), and others experimented with touchscreens. What design do you think will succeed?",
    choices: [
      { text: "Touchscreen", nextStage: "smartphones_dominant" },
      { text: "Keyboard", nextStage: "smartphones_dominant_fail" }
    ]
  },
  smartphones_dominant: {
    text: "The touchscreen iPhone becomes the dominant design due to its sleek interface and app ecosystem. What innovation will you focus on next?",
    choices: [
      { text: "Camera improvements", nextStage: "smartphones_post" },
      { text: "Battery life", nextStage: "smartphones_post" }
    ]
  },
  smartphones_dominant_fail: {
    text: "Keyboard smartphones failed to capture the market as touchscreens became more popular. The iPhone takes the lead. What's next?",
    choices: [
      { text: "Adopt touchscreen innovations", nextStage: "smartphones_dominant" }
    ]
  },
  smartphones_post: {
    text: "Innovation shifts to improving cameras, battery life, and app ecosystems. Disruption comes from foldable phones. What do you do?",
    choices: [
      { text: "Adopt foldable phones", nextStage: "smartphones_disrupt" },
      { text: "Stick with the classic design", nextStage: "smartphones_complement" }
    ]
  },
  smartphones_disrupt: {
    text: "Foldable phones represent the next wave of smartphone innovation, challenging the classic design.",
    choices: [
      { text: "End simulation", nextStage: "end" }
    ]
  },
  smartphones_complement: {
    text: "The classic smartphone continues to improve through innovations like wireless charging and advanced cameras.",
    choices: [
      { text: "End simulation", nextStage: "end" }
    ]
  },

  // Home Appliances Industry
  appliances_pre: {
    text: "In the early days of home appliances, there were many competing designs for refrigerators, washing machines, and vacuum cleaners. What do you think will become dominant in the kitchen appliance market?",
    choices: [
      { text: "Compressor-based refrigerators", nextStage: "appliances_dominant" },
      { text: "Icebox", nextStage: "appliances_dominant_fail" }
    ]
  },
  appliances_dominant: {
    text: "The compressor-based refrigerator became the dominant design due to its efficiency and ability to keep food fresh longer. What area of innovation will you focus on next?",
    choices: [
      { text: "Energy efficiency", nextStage: "appliances_post" },
      { text: "Smart refrigerators (IoT)", nextStage: "appliances_post" }
    ]
  },
  appliances_dominant_fail: {
    text: "The icebox was eventually replaced by more efficient compressor-based refrigerators. The dominant design shifted, leading to new innovations. What now?",
    choices: [
      { text: "Adopt compressor innovation", nextStage: "appliances_dominant" }
    ]
  },
  appliances_post: {
    text: "Post-dominant design: The focus shifts to improving energy efficiency and adding smart capabilities, like IoT. What's the next step?",
    choices: [
      { text: "Focus on smart appliances as disruptive innovation", nextStage: "appliances_disrupt" },
      { text: "Keep improving energy efficiency", nextStage: "appliances_complement" }
    ]
  },
  appliances_disrupt: {
    text: "Smart refrigerators with IoT features begin to disrupt the traditional home appliance market, leading to innovations like food tracking and smart home integration.",
    choices: [
      { text: "End simulation", nextStage: "end" }
    ]
  },
  appliances_complement: {
    text: "Energy-efficient appliances continue to improve, benefiting from complementary innovations in power consumption, recycling, and environmentally friendly materials.",
    choices: [
      { text: "End simulation", nextStage: "end" }
    ]
  },

  // Personal Computing Industry
  computing_pre: {
    text: "In the early days of personal computing, there were many competing designs like the Apple II, IBM PC, and Commodore 64. Which design will become dominant?",
    choices: [
      { text: "IBM PC", nextStage: "computing_dominant" },
      { text: "Apple II", nextStage: "computing_dominant_fail" }
    ]
  },
  computing_dominant: {
    text: "The IBM PC became the dominant design due to its open architecture, allowing other manufacturers to build compatible systems. What innovation will you focus on next?",
    choices: [
      { text: "Graphical user interfaces", nextStage: "computing_post" },
      { text: "Portable computing (laptops)", nextStage: "computing_post" }
    ]
  },
  computing_dominant_fail: {
    text: "Although the Apple II was popular for a while, the IBM PC's open architecture allowed it to dominate the market. What will you do next?",
    choices: [
      { text: "Adopt IBM PC innovations", nextStage: "computing_dominant" }
    ]
  },
  computing_post: {
    text: "Post-dominant design: Innovation shifts to graphical user interfaces (GUIs) and portable computing (laptops). What do you want to pursue?",
    choices: [
      { text: "Focus on mobile devices as disruptive innovation", nextStage: "computing_disrupt" },
      { text: "Keep improving desktop and laptop computers", nextStage: "computing_complement" }
    ]
  },
  computing_disrupt: {
    text: "Mobile devices like smartphones and tablets start to challenge the dominance of traditional desktop and laptop computers, representing a major shift in personal computing.",
    choices: [
      { text: "End simulation", nextStage: "end" }
    ]
  },
  computing_complement: {
    text: "Desktop and laptop computers continue to improve through complementary innovations like faster processors, better graphics, and larger storage.",
    choices: [
      { text: "End simulation", nextStage: "end" }
    ]
  },

  // End Stage
  end: {
    text: "Thank you for playing the Dominant Design Simulation! You've learned about how dominant designs shape and influence innovation across industries.",
    choices: [
		{ text: "Restart to play again", nextStage: "start" }
	]
  }
};


// Handle the current stage
let currentStage = "start";

function startSimulation() {
// Select the button element by its ID
const startButton = document.getElementById('start-btn');

// Remove the button from the DOM
startButton.remove();

  displayStage(currentStage);
}

// Function to display a stage
function displayStage(stageKey) {
  const stage = stages[stageKey];
  const textOutput = document.getElementById('text-output');
  const choicesDiv = document.getElementById('choices');
  const actionsDiv = document.getElementById('actions');

  textOutput.innerHTML = stage.text;
  choicesDiv.innerHTML = '';

  stage.choices.forEach(choice => {
    const button = document.createElement('button');
    button.innerText = choice.text;
    button.onclick = () => {
      currentStage = choice.nextStage;
	  console.log(currentStage);
      displayStage(currentStage);
    };
    choicesDiv.appendChild(button);
  });

 
}
