const CheckUrl = (URL) => {
    const urlRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/;
    return urlRegex.test(URL);
};

export default CheckUrl; // ✅ ES module default export
