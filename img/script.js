<!-- JavaScript for mobile menu toggle and smooth scrolling -->
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                // Mobile menu toggle
                document.querySelector('.menu-btn').addEventListener('click', function () {
                    document.querySelector('.main-nav').classList.toggle('show');
                });

                // Smooth scrolling for anchor links
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function (e) {
                        e.preventDefault();

                        document.querySelector(this.getAttribute('href')).scrollIntoView({
                            behavior: 'smooth'
                        })