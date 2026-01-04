import Container from "@/components/Containers";

export default function AboutPage() {
  return (
    <Container>
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          About Me
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          I am a passionate developer building modern web applications. This
          layout is now consistent with the rest of the site!
        </p>
      </div>
    </Container>
  );
}
