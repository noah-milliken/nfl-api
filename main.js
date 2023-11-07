document.querySelector("button").addEventListener("click", getTeamInfo);

async function getTeamInfo() {
  const teamName = document.querySelector("input").value;
  try {
    const res = await fetch(
      `https://sore-crab-crown.cyclic.app/api/teams/${teamName}`
    );
    const data = await res.json();
    console.log(data);
    document.getElementById("abbreviation").innerText = data.abbreviation;
  } catch (err) {
    console.log(err);
    document.getElementById("abbreviation").innerText = err;
  }
}
