const developer = {
    devID: 1,
    username: "codeNinja",
    yearsExperience: 5.5,
    isActive: true,
    pictureUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=Alexander",
    email: "ninja@example.com",
    phone: "123-456-7889",
    skills: ["JavaScript", "React", "Node.js"],
    bio: "A full-stack specialist with 5.5 years of experience, codeNinja excels at building modern, responsive web applications using JavaScript, React, and Node.js."
};

const root = document.getElementById('root');

const card = document.createElement("div");
card.className = "card";
card.innerHTML = `
      <img src="${developer.pictureUrl}" alt="${developer.username}">
      <h2>${developer.username}</h2>
      <p><strong>Experience:</strong> ${developer.yearsExperience} years</p>
      <p><strong>Status:</strong> ${developer.isActive ? "Active" : "Inactive"}</p>
      <p><strong>Email:</strong> ${developer.email}</p>
      <p><strong>Phone:</strong> ${developer.phone}</p>
      <p>${developer.bio}</p>
      <div class="skills">
        <strong>Skills:</strong>
        ${developer.skills.map(skill => `<span>${skill}</span>`).join('')}
      </div>
    `;

root.appendChild(card);
