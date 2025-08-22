
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import About from "@/components/About";
import dbConnect from "@/lib/dbConnect";

export default async function Home() {
  let books = [];

  try {
    const booksCollection = await dbConnect("books");
    // Get books and convert to plain objects in one step
    books = (await booksCollection.find({}).toArray()).map(book => ({
      ...book,
      _id: book._id.toString()
    }));
  } catch (error) {
    console.error("Error fetching books:", error);
  }

  return (
    <div className="">
      <Hero></Hero>
      <FeaturedProducts books={books}></FeaturedProducts>
      <About></About>
    </div>
  );
}