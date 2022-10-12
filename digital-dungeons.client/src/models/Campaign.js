export class Campaign {

  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.creatorId = data.creatorId
    this.desc = data.desc
    this.coverImg = data.coverImg
  }
}