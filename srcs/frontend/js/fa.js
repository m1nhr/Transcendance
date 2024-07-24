async function handleFa() {
	let csrfToken = await getCSRFToken();
	const btn = document.getElementById("fa");
	try{
		let jwtToken = localStorage.getItem('jwtToken');
		if (!jwtToken) {
			throw new Error('JWT token not found.');
		}
		const response = await fetch('/api/fa/', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${jwtToken}`,
                'X-CSRFToken': csrfToken
            },
            credentials: 'include'
        });
		if (response.ok) {
            const result = await response.json();
			if (result.message){
				window.history.pushState({}, "", '/profile');
				await handleLocation();
			}
        } else {
            console.error('Switch failed:', response.statusText);
        }
    } catch (error) {
        console.error('Error during switching:', error);
    }
}