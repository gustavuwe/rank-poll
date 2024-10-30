import { Body, Controller, Post } from "@nestjs/common";
import type { CreatePollDto, JoinPollDto } from "./dtos";

@Controller('polls')
export class PollsController {

  @Post()
  async create(@Body() createPollDto: CreatePollDto) {
    return createPollDto
  }

  @Post('/join')
  async join(@Body() joinPollDto: JoinPollDto) {
    return joinPollDto
  }

  @Post('/rejoin')
  async rejoin() {
    
  }
}