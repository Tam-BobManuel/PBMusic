import Link from "next/link";
import Image from 'next/image';
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "./ui/button";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="bg-[#0B4424] mt-2 w-full">
        <div className="text-white w-full my-0 mx-auto flex flex-col-reverse gap-y-3.5 md:flex-row lg:flex-row items-center justify-between pt-5 pb-2">
          <div className="flex flex-col items-center gap-y-1.5 md:items-end lg:items-end w-full">
            <div className="flex justify-center items-center gap-x-2.5 w-full">
              <Link href="https://www.facebook.com/southern.gloryy">
                <Image src="/icons/Facebook.svg" alt="Facebook" width={35} height={35}/>
              </Link>
              <Link href="#">
                <Image src="/icons/Tik Tok.svg" alt="Tik Tok" width={35} height={35}/>
              </Link>
              <Dialog>
                <DialogTrigger>
                  <Image src="/icons/Email.svg" alt="Email" width={35} height={35} />
                </DialogTrigger>
                <DialogContent className="bg-black border-gray text-white md:max-w-[50%] sm:max-w-[95%]">
                  <DialogHeader>
                    <DialogTitle className="text-xl text-center">Send Email</DialogTitle>
                    <DialogDescription className="text-base text-white text-center">
                      Send us a mail without leaving the app. Click &apos;send message&apos; when you&apos;re done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-row-4 items-center gap-4">
                      <form
                        id="contact-form"
                        // onSubmit={handleSubmit}
                        action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_FORM_SUBMIT}`}
                        method="POST"
                      >
                        <Label htmlFor="name" className="text-xl mt-4 text-center w-full col-span-3">
                          Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your name..."
                          className="col-span-3 text-black mb-4 text-base"
                          name="name"
                          required
                        />
                        <Label htmlFor="username" className="text-xl mt-4 text-center col-span-3">
                          Email
                        </Label>
                        <Input
                          id="username"
                          placeholder="Your email..."
                          className="col-span-3 text-black text-base mb-4"
                          name="email"
                          type="email"
                          required
                        />
                        <Label htmlFor="message" className="text-xl mt-4 text-center col-span-3">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Your message..."
                          className="col-span-3 text-black text-base mb-4"
                          name="message"
                          required
                        />
                        <DialogFooter>
                          <Button type="submit" className="w-full mt-4 text-xl">
                            Send message
                          </Button>
                        </DialogFooter>
                      </form>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Link href="https://twitter.com/tam_webdev">
                <Image src="/icons/X.svg" alt="X" width={35} height={35}/>
              </Link>
              <Link href="https://www.instagram.com/bobmanuel__/">
                <Image src="/icons/Instagram.svg" alt="Instagram" width={35} height={35}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-3.5">
        <p className="text-center text-[#6C6C6C] font-medium text-base leading-5">
      Copywrite © {currentYear}. All rights reserved
    </p>
  </div>
</div>
  );
};

export default Footer;