async function signout() {
  console.log(1);
  await fetch("/session", { method: "DELETE", credentials: "same-origin" });
  window.location.replace("/signin");
}
