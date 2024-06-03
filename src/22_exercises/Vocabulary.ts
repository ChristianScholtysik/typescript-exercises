class Vocabulary {
  private _words: string[] = [];
  protected _language: string;

  constructor() {
    this._language = "English";
  }

  public addWord(word: string) {
    this._words.push(word);
  }

  //   protected dislayAll() {
  public dislayAll() {
    console.log(`Language: ${this._language}`);
    console.log(this._words.join(", "));
  }
}

export default Vocabulary;
