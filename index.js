
    
        document.addEventListener('DOMContentLoaded', function() {
            const projectsBtn = document.getElementById('projectsBtn');
            
            projectsBtn.addEventListener('click', function() {
                alert('Projects feature coming soon!');
                // In a real implementation, this would link to a projects page or section
            });
            
            // Add a subtle animation to the hero section
            const hero = document.querySelector('.hero');
            hero.style.opacity = 0;
            hero.style.transform = 'translateY(20px)';
            
            let opacity = 0;
            let position = 20;
            const fadeIn = setInterval(() => {
                opacity += 0.05;
                position -= 1;
                hero.style.opacity = opacity;
                hero.style.transform = `translateY(${position}px)`;
                
                if (opacity >= 1) {
                    clearInterval(fadeIn);
                    hero.style.transform = 'translateY(0)';
                }
            }, 30);
        });
    