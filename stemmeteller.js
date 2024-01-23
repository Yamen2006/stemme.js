
        var options = ['Arbeiderpartiet', 'Høyre', 'Senterpartiet', 'Fremskrittspartiet', 'Sosialistisk Venstreparti', 'Rødt', 'Venstre', 'Miljøpartiet De Grønne', 'Kristelig Folkeparti', 'Pasientfokus'];
        var votes = Array.from({ length: options.length }, () => 0);

        var optionsContainer = document.getElementById('options-container');
        var voteChartCanvas = document.getElementById('voteChart');

        // Dynamically create options
        options.forEach((option, index) => {
            var optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.innerHTML = `<label ><input type="radio" name="voteOption" id="${option}" value="${index}"> ${option}</label>`;
            optionsContainer.appendChild(optionElement);
        });


        var myChart = new Chart(voteChartCanvas, {
            type: 'bar',
            data: {
                labels: options,
                datasets: [{
                    label: 'Votes',
                    data: votes,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        function submitVote() {
            var selectedOption = document.querySelector('input[name="voteOption"]:checked');

            if (selectedOption) {
                var index = selectedOption.value;
                votes[index]++;
                updateVoteResults();
            } else {
                alert('Please select an option before submitting your vote.');
            }
        }       
        
        
        function submitInfo() {

            
        }

        

        function updateVoteResults() {
            // Update the chart data with the new votes
            myChart.data.datasets[0].data = votes;
            myChart.update();
        }
        function age(){
            
           let  age = prompt("What is your age ?")
           localStorage.setItem("age" , age)
            if(age >= 18) {
                let  name = prompt("What is your name ?")

            }
            else {
                alert ("You are under the ligal age!")
                window.close();
            }
        }
age()

function supmitInfo() {
    alert("All of your informations are safe and Unknown!")
}