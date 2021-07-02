var firstRun = 4;

export default function Bubble() {
    const sections = document.querySelectorAll("section");
    const bubble = document.querySelector(".bubble");
    const gradients = ["linear-gradient(to right top, #f46b4, #eea849)",
        "linear-gradient(to right top, #f46b4, #eea849)",
        "linear-gradient(to right top, #f46b4, #eea849)",
        "linear-gradient(to right top, #f46b4, #eea849)"
    ]; 

    const options = {
        threshold: 0.9
    };
    
    function navCheck(entries) {

        console.log(observer.takeRecords());
        observer.takeRecords().forEach(r => {
            console.log(`${r.target.dataset.source} -> ${r.threshold}`);
        });

        entries.forEach(entry => {
            document.querySelectorAll(".navigation").forEach((n) => {
                n.style.color = "#d94545";
            });

            if(firstRun > 0) {
                document.querySelector(".navigation:first-child").style.color = "#fa1e0e";
                firstRun--;
            } else {
                const className = entry.target.dataset.source;
                console.log(className);
                const activeAnchor = document.querySelector(`[data-page=${className}]`);
                activeAnchor.style.color = "#fa1e0e";
            }
        });
    }

    let observer = new IntersectionObserver(navCheck, options);
    
    sections.forEach(section => {
        observer.observe(section);
    })
}

