document.addEventListener('DOMContentLoaded', () => {
    const roles = ['Student', 'Developer', 'Tech Enthusiast', 'Debugger'];
    const roleElement = document.getElementById('dynamicRole');
    let currentIndex = 0;

    function changeRole() {
        roleElement.style.opacity = 0;
        roleElement.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            roleElement.textContent = roles[currentIndex];
            roleElement.style.opacity = 1;
            roleElement.style.transform = 'translateY(0)';
            
            currentIndex = (currentIndex + 1) % roles.length;
        }, 500);
    }

    setInterval(changeRole, 2000);

    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    const interactiveElements = document.querySelectorAll('button, a');

    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorFollower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '30px';
            cursor.style.height = '30px';
            cursorFollower.style.width = '50px';
            cursorFollower.style.height = '50px';
        });

        el.addEventListener('mouseleave', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursorFollower.style.width = '40px';
            cursorFollower.style.height = '40px';
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});