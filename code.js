const NeonModeButton = document.getElementById('NeonModeButton');
NeonModeButton.onclick = () => {
    body.classList.replace('normalMode', 'neonMode');
  };
  
function button(){
  const bodyTheme = document.body;
  bodyTheme.classList.toggle("neonMode");
};