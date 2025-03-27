document.addEventListener("DOMContentLoaded", () => {
    // Load Members
    fetch("data/members.json")
      .then((res) => res.json())
      .then((data) => {
        const membersList = document.getElementById("members");
        data.members.forEach((member) => {
          const li = document.createElement("li");
          li.textContent = `${member.stageName} (${member.fullName})`;
          membersList.appendChild(li);
        });
      });
  
    // Load Gallery
    fetch("data/gallery.json")
      .then((res) => res.json())
      .then((data) => {
        const gallery = document.getElementById("gallery");
        data.images.forEach((url) => {
          const img = document.createElement("img");
          img.src = url;
          img.className = "rounded-lg shadow-md hover:scale-105 transition-transform";
          gallery.appendChild(img);
        });
      });
  });