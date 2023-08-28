<script>
  const webDevTab = document.getElementById("webDevTab");
  const projectManagementTab = document.getElementById("projectManagementTab");
  const webDevProjectsButton = document.getElementById("webDevProjectsButton");
  const projectManagementProjectsButton = document.getElementById("projectManagementProjectsButton");
  const webDevProjectsSection = document.getElementById("webDevProjectsSection");
  const projectManagementProjectsSection = document.getElementById("projectManagementProjectsSection");

  webDevTab.addEventListener("click", () => {
    webDevProjectsSection.style.display = "block";
    projectManagementProjectsSection.style.display = "none";
  });

  projectManagementTab.addEventListener("click", () => {
    webDevProjectsSection.style.display = "none";
    projectManagementProjectsSection.style.display = "block";
  });

  webDevProjectsButton.addEventListener("click", () => {
    webDevProjectsSection.style.display = "block";
    projectManagementProjectsSection.style.display = "none";
  });

  projectManagementProjectsButton.addEventListener("click", () => {
    webDevProjectsSection.style.display = "none";
    projectManagementProjectsSection.style.display = "block";
  });
</script>








