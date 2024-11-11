<div>
    <!-- Show loading indicator while data is being fetched -->
    @if ($loading)
        <div>Loading authors...</div>
    @endif

    <!-- Show error message if there was an issue loading the users -->
    @if ($errorMessage)
        <div class="error">{{ $errorMessage }}</div>
    @endif

    <!-- Users Table -->
    @if (!$loading && count($authors) > 0)
    <div class="table-responsive" style="max-height: 400px; overflow-y: auto; display: block;">
        <table id="all-authors" class="table table-bordered table-striped">
            <thead style="position: sticky; top: 0; background-color: white;">
                <tr class="bg-gray-100">
                    <th class="px-4 py-2 border">First Name</th>
                    <th class="px-4 py-2 border">Last Name</th>
                    <th class="px-4 py-2 border">Email</th>
                    <th class="px-4 py-2 border">Cellphone</th>
                    <th class="px-4 py-2 border">Message</th>
                </tr>
            </thead>
            <tbody>
            
                @foreach ($authors as $author)
                    <tr>
                        <td class="px-4 py-2 border">{{ $author['firstname'] }}</td>
                        <td class="px-4 py-2 border">{{ $author['lastname'] }}</td>
                        <td class="px-4 py-2 border">{{ $author['email'] }}</td>
                        <td class="px-4 py-2 border">{{ $author['cellphone'] }}</td>
                        <td class="px-4 py-2 border">{{ $author['message'] }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>

     

    </div>
    @elseif (!$loading)
        <div>No users found.</div>
    @endif

</div>

@push('scripts')
<script>
 
    document.addEventListener('livewire:init', () => {
       Livewire.on('athour-created', (event) => {
           
       });
    });
  
</script>
@endpush
