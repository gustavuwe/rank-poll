import { Controller, Post } from "@nestjs/common";

@Controller('polls')
export class PollsController {

  @Post()
  async create() {

  }

  @Post('/join')
  async join() {
    
  }

  @Post('/rejoin')
  async rejoin() {
    
  }
}