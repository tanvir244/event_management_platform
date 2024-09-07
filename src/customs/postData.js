export const postData = async (newUser) => {
    const response = await fetch("http://localhost:3000/api/post_register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser)
    })
    return response;
}