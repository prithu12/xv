import Helix from "@/public/assests/cube-helix 1.png";
import Cube from "@/public/assests/cube-helix.png";
import Image from "next/image";
import { FaArrowUpLong } from "react-icons/fa6";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SignalIcon, Headphones, VideoIcon } from 'lucide-react'

const ProductCard = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl bg-white border-0">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-indigo-700">
            Empowering Communication
          </CardTitle>
          <CardDescription className="text-center text-lg">
            Bridging gaps and fostering inclusivity in the deaf and mute community
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="translator" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="translator">AI Translator</TabsTrigger>
              <TabsTrigger value="converter">AI Converter</TabsTrigger>
              <TabsTrigger value="learn">Learn Sign Language</TabsTrigger>
            </TabsList>
            <TabsContent value="translator">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <SignalIcon className="w-6 h-6 text-indigo-600" />
                    AI Sign Language Translator
                  </CardTitle>
                  <CardDescription>
                    Instantly translate between sign language and text
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Our AI-powered translator bridges communication gaps by converting sign language to text and vice versa in real-time.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Try Translator</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="converter">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Headphones className="w-6 h-6 text-indigo-600" />
                    AI Speech-to-Text Converter
                  </CardTitle>
                  <CardDescription>
                    Convert spoken words to text for easier communication
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Our AI converter transforms spoken language into readable text, making it easier for the deaf community to engage in conversations.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <a target="_blank" href="/Convertor">Try Converter</a>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="learn">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <VideoIcon className="w-6 h-6 text-indigo-600" />
                    Interactive Sign Language Lessons
                  </CardTitle>
                  <CardDescription>
                    Learn sign language through engaging video tutorials
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Access a comprehensive library of sign language lessons, from beginner to advanced levels, to enhance communication skills.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Learning</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500">Empowering communication for all</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
