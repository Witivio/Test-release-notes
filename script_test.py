import subprocess
import json
import os

# La commande à exécuter
command = [
    'curl',
    '-s',
    'https://api.intercom.io/articles/search?phrase=Gantt%20Chart',
    '-H', 'Authorization:Bearer dG9rOjllOTM3OTQ3X2VjNmRfNGEyZl9iNWJhXzNkMzUxNWViMTQ2MjoxOjA=',
    '-H', 'Accept: application/json'
]

try:
    # Exécute la commande curl
    output = subprocess.check_output(command, stderr=subprocess.STDOUT, universal_newlines=True)
    with open('segment.json', 'w') as file:
        file.write(output)
    print("Données enregistrées dans data.json")
except subprocess.CalledProcessError as e:
    print(f"Erreur : La commande a renvoyé un code d'erreur {e.returncode}.")
    print(f"Sortie de l'erreur : {e.output}")
except Exception as e:
    print(f"Une erreur s'est produite : {str(e)}")
