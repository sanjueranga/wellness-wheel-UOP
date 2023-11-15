import { Controller, Get, Request, UseGuards, Response } from '@nestjs/common';
import { GoogleAuthGuard } from '../guards/auth.guard';
import { AuthService } from 'src/services/auth.service';
import { CookieOptions } from 'express';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() {
    console.log('called');
    return { msg: 'Google Authentication' };
  }

  @Get('google-redirect')
  @UseGuards(GoogleAuthGuard)
  async handleRedirect(@Request() req, @Response() res) {
    const authenticatedUser = req.user;
    const validatedUser =
      await this.authService.validateUser(authenticatedUser);
    const userData = JSON.stringify(validatedUser);
    if (authenticatedUser) {
      const script = `
      if (window.opener) {
        window.opener.postMessage('${userData}', '*');
      }
    `;
      return res.send(`<script>${script}</script><p>OK</p>`);
    } else {
      return res.json({ msg: 'OK' });
    }
  }
}
