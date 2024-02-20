const Book = async () => {
    let Name = document.getElementById('name');
    let Chapter = document.getElementById('chapter');
    let Verse = document.getElementById('verse');
    const response = await fetch(`https://bible-api.com/${Name.value}+${Chapter.value}:${Verse.value}`)
    const data = await response.json();
    if (response.status == 200)
    {
        let Tname = document.getElementById('tname');
        let Tnameval = document.getElementById('tnameval');
        let Txt = document.getElementById('txt');
        let Textval = document.getElementById('textval');
        Tname.innerText = 'Translation_Name :'
        Tnameval.innerText = data.translation_name;
        Txt.innerText = 'Bible Content  :'
        Textval.innerText = "✓  "+data.text;
        }
}
