export class Document {
  constructor(public readonly _id: string, public data?: any) {}

  toJSON() {
    return {
      _id: this._id,
      ...this.data,
    };
  }
}
