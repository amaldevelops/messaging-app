async function homePage(req, res, next) {
  try {
    res.json({ status: "Backend Systems running ok" });
  } catch (error) {
    console.error(error);
  }
}

export { homePage };
