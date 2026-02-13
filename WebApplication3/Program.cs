// Create the web application builder
var builder = WebApplication.CreateBuilder(args);

// Add MVC services (controllers and views) to the app
builder.Services.AddControllersWithViews();

// Build the application
var app = builder.Build();

// Configure how the app handles HTTP requests
if (!app.Environment.IsDevelopment())
{
    // Use a custom error page in production
    app.UseExceptionHandler("/Home/Error");

    // Enable HSTS to improve security in production
    app.UseHsts();
}

// Redirect HTTP requests to HTTPS
app.UseHttpsRedirection();

// Enable routing so the app knows how to match URLs
app.UseRouting();

// Enable authorization (checks user permissions)
app.UseAuthorization();

// Enable static files like CSS, JS, and images
app.MapStaticAssets();

// Set the default route (Home controller, Index action)
app.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}")
    .WithStaticAssets();

// Run the application
app.Run();