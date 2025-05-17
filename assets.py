import json
import os
import subprocess
from urllib.parse import urlparse

with open('data/en/news/content.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

base_url = 'https://brawlstars.inbox.supercell.com'

def clean_and_download(path):
    if not path.startswith('/assets/images/'):
        return

    relative_path = path.replace('/assets/images/', '', 1)
    parsed_url = urlparse(relative_path)
    clean_path = parsed_url.path

    full_url = base_url + '/' + relative_path
    full_url = full_url.split('?')[0]

    local_path = os.path.join('assets/images', clean_path.lstrip('/'))

    if os.path.exists(local_path):
        return

    os.makedirs(os.path.dirname(local_path), exist_ok=True)

    subprocess.run([
        'wget',
        full_url,
        '-O',
        local_path
    ])

def recurse(data):
    if isinstance(data, dict):
        for k, v in data.items():
            if k == 'path' and isinstance(v, str):
                clean_and_download(v)
            else:
                recurse(v)
    elif isinstance(data, list):
        for item in data:
            recurse(item)

recurse(data)
