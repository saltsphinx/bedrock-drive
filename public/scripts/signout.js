async function signout() {
  await fetch("/session", { method: "DELETE", credentials: "same-origin" });
  window.location.replace("/signin");
}

document.querySelector(".signout-btn").addEventListener("click", signout);
