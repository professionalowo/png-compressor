use image_compression::Compressable;
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn compress_png(data: Vec<u8>) -> Vec<u8> {
    let image = image_compression::png::PngImage::try_create(data).unwrap();
    let compressed = image.try_compress().unwrap();

    compressed.into()
}
